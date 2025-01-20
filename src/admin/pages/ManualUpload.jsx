import { useState } from 'react';
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import AdminLayout from '../components/AdminLayout';
import { uploadAllLessons } from '../components/createHelpers';

const ManualUpload = () => {
  const [count, setCount] = useState(0);
  const dummyData = [];
  
  
  
  const [uploading, setUploading] = useState(false);
  const [uploadingQuestions, setUploadingQuestions] = useState(false);

  const uploadLessons = async () =>{
    try {
      setUploadingQuestions(true)
      await uploadAllLessons();
    } catch (error) {
      console.log('error has arrived ', error);
    } finally {
      setUploadingQuestions(false);
    }
    
  }

  const uploadDummyData = async () => {
    if (uploading) return;
    setUploading(true);
    const questionsCollection = collection(db, "questions");
    try {
      for (const question of dummyData) {
        await addDoc(questionsCollection, question);
        setCount(val => val + 1);
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setUploading(false);
    }
  };

  const stopUploading = () => {
    setUploading(false);
  };

  return (
    <AdminLayout>
      <div className="w-full mt-20 flex flex-col items-center justify-center">
        <p className="text-7xl font-bold text-slate-800 dark:text-slate-300">{count}/{dummyData.length}</p>
        <div className="flex gap-3 mt-5">
          <button
            className="bg-green-600 rounded px-3 py-2 text-slate-100 text-lg"
            onClick={uploadDummyData}
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Start Uploading'}
          </button>
          <button
            className="bg-red-600 rounded px-3 py-2 text-slate-100 text-lg"
            onClick={stopUploading}
            disabled={!uploading}
          >
            Stop
          </button>
        </div>
        <button
            className="bg-purple-600 rounded mt-5 px-3 py-2 text-slate-100 text-lg"
            onClick={uploadLessons}
            disabled={uploadingQuestions}
          >
            {uploadingQuestions ? 'UploadingLessons...' : 'Upload lessons'}
          </button>
      </div>
    </AdminLayout>
  );
};

export default ManualUpload;