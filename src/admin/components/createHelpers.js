import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "../../config/firebase";


const uploadLessons = async (lessonsArray, lessonIdPrefix) => { 
    const batch = writeBatch(db);
    const lessonsRef = collection(db, "lessonQuestions"); 

    lessonsArray.forEach((lesson) => {
      const lessonDocRef = doc(lessonsRef, `${lessonIdPrefix}`); 
      batch.set(lessonDocRef, {
          topic: lesson.topic,
          languages: lesson.languages,
      });
    });

    try {
        await batch.commit();
        console.log(`${lessonIdPrefix} lessons uploaded successfully!`);
    } catch (error) {
        console.error(`Error uploading ${lessonIdPrefix} lessons:`, error);
    }
};



export const uploadAllLessons = async () => {
    await uploadLessons(introduction, "introduction-1");
    await uploadLessons(numbers, "numbers-1");
    await uploadLessons(polite, "polite-1");
    await uploadLessons(narration, "narration-1");
    await uploadLessons(emergency, "emergency-1");
    await uploadLessons(greetings, "greetings-1");
    await uploadLessons(love, "love-1");
    await uploadLessons(buying, "market-1");
    await uploadLessons(opinions, "opinions-1");
    await uploadLessons(idioms, "wisesayings-1");
    await uploadLessons(directions, "directions-1");
};

const greetings = [
    {
      topic: "greetings",
      languages: {
        english: [
          {
            "question": "What is the most appropriate formal greeting to use when meeting someone for the first time in a professional setting?",
            "options": [
              "Hello, Mr./Ms./Mrs./Dr. [Last Name]",
              "It's a pleasure to meet you",
              "How are you doing today?",
              "What's up?"
            ],
            "answer": "It's a pleasure to meet you"
          },
          {
            "question": "Which of the following is NOT a formal way to address someone in a letter or email?",
            "options": [
              "Dear Sir or Madam",
              "To Whom It May Concern",
              "To the Hiring Manager",
              "Hi there!"
            ],
            "answer": "Hi there!"
          },
          {
            "question": "What is the difference between 'Good morning' and 'Morning' in terms of formality?",
            "options": [
              "'Good morning' is more informal than 'Morning'.",
              "'Good morning' is more formal than 'Morning'.",
              "They are equally formal.",
              "They are used in different contexts."
            ],
            "answer": "'Good morning' is more formal than 'Morning'."
          },
          {
            "question": "Which greeting would you use when parting ways with someone you just met in a formal setting?",
            "options": [
              "Goodbye",
              "Take care",
              "See you later!",
              "Nice to meet you"
            ],
            "answer": "Goodbye"
          },
          {
            "question": "How would you introduce yourself in a formal setting?",
            "options": [
              "My name is [Your Name], and I work as [Your Profession].",
              "I am from [Your City/Country].",
              "Hello, I am [Your Name].",
              "What's up? I am [Your Name]."
            ],
            "answer": "My name is [Your Name], and I work as [Your Profession]."
          },
          {
            "question": "What is an appropriate way to start a formal email?",
            "options": [
              "Dear [Recipient's Name],",
              "Hi [Recipient's Name],",
              "Hello [Recipient's Name],",
              "What's up? [Recipient's Name],"
            ],
            "answer": "Dear [Recipient's Name],"
          },
          {
            "question": "Which of the following is an example of an informal greeting used among friends?",
            "options": [
              "How do you do?",
              "It's a pleasure to meet you",
              "What's up?",
              "Good morning"
            ],
            "answer": "What's up?"
          },
          {
            "question": "How would you ask about someone's day in an informal setting?",
            "options": [
              "How was your day?",
              "How are you doing today?",
              "It's a pleasure to meet you",
              "Good morning"
            ],
            "answer": "How was your day?"
          },
          {
            "question": "What is the purpose of using 'To Whom It May Concern' in a formal letter?",
            "options": [
              "To address a specific person.",
              "To address an unknown recipient.",
              "To add a formal tone.",
              "To introduce yourself."
            ],
            "answer": "To address an unknown recipient."
          },
          {
            "question": "Which of the following is NOT an example of a formal greeting?",
            "options": [
              "Good afternoon",
              "Hello, Mr./Ms./Mrs./Dr. [Last Name]",
              "Hey!",
              "It's a pleasure to meet you"
            ],
            "answer": "Hey!"
          },
          {
            "question": "How would you end a formal email?",
            "options": [
              "Best regards, [Your Name]",
              "See you later!",
              "Take care",
              "What's up?"
            ],
            "answer": "Best regards, [Your Name]"
          },
          {
            "question": "What is the difference between 'Nice to meet you' and 'It's a pleasure to meet you'?",
            "options": [
              "'Nice to meet you' is more formal.",
              "'It's a pleasure to meet you' is more formal.",
              "They are equally formal.",
              "They are used in different contexts."
            ],
            "answer": "'It's a pleasure to meet you' is more formal."
          },
          {
            "question": "Which greeting is suitable for use in both formal and informal settings?",
            "options": [
              "Hello",
              "What's up?",
              "Good morning",
              "It's a pleasure to meet you"
            ],
            "answer": "Hello"
          },
          {
            "question": "How would you greet someone you haven't seen in a long time?",
            "options": [
              "Long time no see!",
              "Good morning",
              "It's a pleasure to meet you",
              "What's up?"
            ],
            "answer": "Long time no see!"
          },
          {
            "question": "What is the purpose of using 'Dear Mr./Ms./Mrs./Dr. [Last Name]' in a formal letter?",
            "options": [
              "To address an unknown recipient.",
              "To add a formal tone.",
              "To introduce yourself.",
              "To address a specific person with respect."
            ],
            "answer": "To address a specific person with respect."
          },
          {
            "question": "Which of the following is an example of asking about someone's well-being in an informal setting?",
            "options": [
              "How do you do?",
              "How are you doing today?",
              "What's up?",
              "It's a pleasure to meet you"
            ],
            "answer": "What's up?"
          },
          {
            "question": "How would you greet someone in the afternoon in a formal setting?",
            "options": [
              "Good afternoon",
              "Hello",
              "What's up?",
              "It's a pleasure to meet you"
            ],
            "answer": "Good afternoon"
          },
          {
            "question": "What is the appropriate response to the formal greeting 'How do you do?'?",
            "options": [
              "I'm fine, thank you.",
              "Hello, how are you?",
              "I'm doing well, thank you.",
              "Nice to meet you."
            ],
            "answer": "I'm doing well, thank you."
          },
          {
            "question": "When would you use the greeting 'Good evening' instead of 'Good night'?",
            "options": [
              "When saying goodbye at the end of the day.",
              "When meeting someone late in the day but before parting ways.",
              "When starting a formal email.",
              "When introducing yourself for the first time."
            ],
            "answer": "When meeting someone late in the day but before parting ways."
          },
          {
            "question": "What is the difference between 'Nice to meet you' and 'It's nice to see you'?",
            "options": [
              "'Nice to meet you' is used with friends, while 'It's nice to see you' is used with strangers.",
              "'Nice to meet you' is used when meeting someone for the first time, while 'It's nice to see you' is used when seeing someone you have met before.",
              "'Nice to meet you' is informal, while 'It's nice to see you' is formal.",
              "'Nice to meet you' is used in formal settings, while 'It's nice to see you' is used in informal settings."
            ],
            "answer": "'Nice to meet you' is used when meeting someone for the first time, while 'It's nice to see you' is used when seeing someone you have met before."
          },
          {
            "question": "Which of the following is an appropriate way to greet someone in a business meeting?",
            "options": [
              "Hey, how's it going?",
              "Good morning, Mr./Ms./Mrs./Dr. [Last Name].",
              "What's up?",
              "How are things?"
            ],
            "answer": "Good morning, Mr./Ms./Mrs./Dr. [Last Name]."
          },
          {
            "question": "When would you use the greeting 'To Whom It May Concern'?",
            "options": [
              "When writing a formal email to someone whose name you know.",
              "When writing a formal email to someone whose name you do not know.",
              "When meeting someone for the first time in a formal setting.",
              "When parting ways with someone you have just met."
            ],
            "answer": "When writing a formal email to someone whose name you do not know."
          }
        ],
        hausa: [
          {
            "question": "What is the most common formal greeting in Hausa, and how do you respond to it?",
            "options": [
              "Ina kwana? - Lafiya lau",
              "Barka da safe - Sannu",
              "Barka da yamma - Lafiya lau",
              "Sannu da zuwa - Yawwa Sannu"
            ],
            "answer": "Ina kwana? - Lafiya lau"
          },
          {
            "question": "How do you greet someone in the morning in Hausa?",
            "options": [
              "Barka da yamma",
              "Barka da safe",
              "Ina kwana?",
              "Sannu da zuwa"
            ],
            "answer": "Barka da safe"
          },
          {
            "question": "What is the appropriate response to 'Ina gajiya?' (How is your tiredness?) in Hausa?",
            "options": [
              "Lafiya lau",
              "Ba gajiya",
              "Sannu da zuwa",
              "Ina kwana?"
            ],
            "answer": "Ba gajiya"
          },
          {
            "question": "How do you ask about someone's family in Hausa?",
            "options": [
              "Ina iyali?",
              "Ina gajiya?",
              "Ina aiki?",
              "Ku dai?"
            ],
            "answer": "Ina iyali?"
          },
          {
            "question": "What is the informal way to greet someone in Hausa?",
            "options": [
              "Sannu",
              "Barka da safe",
              "Barka da yamma",
              "Ina kwana?"
            ],
            "answer": "Sannu"
          },
          {
            "question": "How do you say 'Good afternoon/evening' in Hausa?",
            "options": [
              "Barka da safe",
              "Barka da rana",
              "Barka da yamma",
              "Ina kwana?"
            ],
            "answer": "Barka da yamma"
          },
          {
            "question": "What is the phrase for 'See you later' in Hausa?",
            "options": [
              "Sai an jima",
              "Sai gobe",
              "Ina kwana?",
              "Lafiya lau"
            ],
            "answer": "Sai an jima"
          },
          {
            "question": "How do you introduce yourself in Hausa?",
            "options": [
              "Sunana [Your Name].",
              "Na fito daga [Your City/Country].",
              "Na zaune a [Your City/Country].",
              "All of the above"
            ],
            "answer": "All of the above"
          },
          {
            "question": "What is the phrase for 'How is your work?' in Hausa?",
            "options": [
              "Ina aiki?",
              "Ina gajiya?",
              "Ina iyali?",
              "Ku dai?"
            ],
            "answer": "Ina aiki?"
          },
          {
            "question": "How do you say 'Good night' in Hausa?",
            "options": [
              "Allah ya ba mu alheri Mu kwana lafiya",
              "Barka da yamma",
              "Ina kwana?",
              "Sai an jima"
            ],
            "answer": "Allah ya ba mu alheri Mu kwana lafiya"
          },
          {
            "question": "What is the appropriate way to greet someone when they arrive in Hausa?",
            "options": [
              "Sannu da zuwa",
              "Barka da safe",
              "Barka da yamma",
              "Ina kwana?"
            ],
            "answer": "Sannu da zuwa"
          },
          {
            "question": "How do you ask about someone's afternoon in Hausa?",
            "options": [
              "Ina marece?",
              "Ina aiki?",
              "Ina gajiya?",
              "Ku dai?"
            ],
            "answer": "Ina marece?"
          },
          {
            "question": "What does 'Ku dai?' mean in Hausa?",
            "options": [
              "How are you?",
              "What's up?",
              "Good morning",
              "Good evening"
            ],
            "answer": "What's up?"
          },
          {
            "question": "How do you say 'Pleased to meet you' in Hausa?",
            "options": [
              "Na farin cikin haduwa da kai",
              "Sannu da zuwa",
              "Barka da safe",
              "Ina kwana?"
            ],
            "answer": "Na farin cikin haduwa da kai"
          },
          {
            "question": "What is the response to 'Sannu' in Hausa?",
            "options": [
              "Yawwa Sannu",
              "Lafiya lau",
              "Ba gajiya",
              "Ina kwana?"
            ],
            "answer": "Yawwa Sannu"
          },
          {
            "question": "How do you ask about someone's children in Hausa?",
            "options": [
              "Ina yara?",
              "Ina iyali?",
              "Ina gajiya?",
              "Ku dai?"
            ],
            "answer": "Ina yara?"
          },
          {
            "question": "What is the phrase for 'Welcome' in Hausa?",
            "options": [
              "Sannu da zuwa",
              "Barka da safe",
              "Barka da yamma",
              "Ina kwana?"
            ],
            "answer": "Sannu da zuwa"
          },
          {
            "question": "How do you say 'See you tomorrow' in Hausa?",
            "options": [
              "Sai an jima",
              "Sai gobe",
              "Ina kwana?",
              "Lafiya lau"
            ],
            "answer": "Sai gobe"
          },
          {
            "question": "How do you greet someone at work in Hausa?",
            "options": [
              "Sannu da zuwa",
              "Sannu da aiki",
              "Barka da safe",
              "Ina kwana?"
            ],
            "answer": "Sannu da aiki"
          },
          {
            "question": "What is the appropriate response to 'Ina gajiya?' (How is the tiredness?) in Hausa?",
            "options": [
              "Lafiya lau",
              "Ba gajiya",
              "Sannu da zuwa",
              "Ina kwana?"
            ],
            "answer": "Ba gajiya"
          },
          {
            "question": "How do you ask about someone's wife in Hausa?",
            "options": [
              "Ina iyali?",
              "Ina mata?",
              "Ina yara?",
              "Ina miji?"
            ],
            "answer": "Ina mata?"
          },
          {
            "question": "What is the phrase for 'See you tomorrow' in Hausa?",
            "options": [
              "Sai an jima",
              "Sai gobe",
              "Ina kwana?",
              "Lafiya lau"
            ],
            "answer": "Sai gobe"
          },
          {
            "question": "How do you say 'Good evening' in Hausa, and how would someone typically respond?",
            "options": [
              "Barka da yamma - Lafiya lau",
              "Ina kwana? - Lafiya",
              "Sannu da zuwa - Yawwa Sannu",
              "Ina gajiya? - Ba gajiya"
            ],
            "answer": "Barka da yamma - Lafiya lau"
          }
        ],
        french: [
          {
            "question": "What is the most common formal greeting in French that can be used throughout the day?",
            "options": [
              "Bonjour",
              "Bonne journée",
              "Bonne soirée",
              "Salut"
            ],
            "answer": "Bonjour"
          },
          {
            "question": "How do you greet someone in the morning in French?",
            "options": [
              "Bonjour",
              "Bonne journée",
              "Bonne soirée",
              "Bon matin"
            ],
            "answer": "Bonjour"
          },
          {
            "question": "What is the appropriate response to 'Comment allez-vous?' (How do you do?) in French?",
            "options": [
              "Ça va bien, merci.",
              "Je vais bien, merci.",
              "Pas mal, merci.",
              "Très bien, merci."
            ],
            "answer": "Ça va bien, merci."
          },
          {
            "question": "How do you greet someone informally in French?",
            "options": [
              "Salut",
              "Bonjour",
              "Bonne journée",
              "Bonne soirée"
            ],
            "answer": "Salut"
          },
          {
            "question": "What is the phrase for 'Nice to meet you' in French, and how does it vary for men and women?",
            "options": [
              "Enchanté (for men), Enchantée (for women)",
              "Ravi de vous rencontrer (no variation)",
              "Je suis heureux de faire votre connaissance (no variation)",
              "Très heureux de vous rencontrer (no variation)"
            ],
            "answer": "Enchanté (for men), Enchantée (for women)"
          },
          {
            "question": "How do you say 'Good evening' in French?",
            "options": [
              "Bonne soirée",
              "Bonne nuit",
              "Bonsoir",
              "Bon après-midi"
            ],
            "answer": "Bonsoir"
          },
          {
            "question": "What is the informal way to ask 'How are you?' in French?",
            "options": [
              "Comment ça va?",
              "Comment allez-vous?",
              "Quoi de neuf?",
              "Ça roule?"
            ],
            "answer": "Comment ça va?"
          },
          {
            "question": "How do you introduce yourself in French?",
            "options": [
              "Je m'appelle [Your Name].",
              "Je suis de [Your City/Country].",
              "Je vis à [Your City/Country].",
              "All of the above"
            ],
            "answer": "All of the above"
          },
          {
            "question": "What is the phrase for 'See you soon' in French?",
            "options": [
              "À bientôt",
              "À demain",
              "À tout à l’heure",
              "Au revoir"
            ],
            "answer": "À bientôt"
          },
          {
            "question": "How do you ask about someone's day in French?",
            "options": [
              "Quelle a été votre journée?",
              "Comment s'est passée votre journée?",
              "Comment allez-vous?",
              "Ça va?"
            ],
            "answer": "Quelle a été votre journée?"
          },
          {
            "question": "What is the formal way to address someone in a letter or email in French?",
            "options": [
              "Cher Monsieur/Madame [Last Name]",
              "Bonjour, monsieur/madame/docteur [Last Name]",
              "Salut",
              "Enchanté/e de faire votre connaissance"
            ],
            "answer": "Cher Monsieur/Madame [Last Name]"
          },
          {
            "question": "How do you say 'Goodbye' formally in French?",
            "options": [
              "Au revoir",
              "À bientôt",
              "À demain",
              "Salut"
            ],
            "answer": "Au revoir"
          },
          {
            "question": "What is the difference between 'Tu' and 'Vous' in French greetings?",
            "options": [
              "'Tu' is formal, 'Vous' is informal.",
              "'Tu' is informal, 'Vous' is formal.",
              "They are used in different regions.",
              "They are used for different times of the day."
            ],
            "answer": "'Tu' is informal, 'Vous' is formal."
          },
          {
            "question": "How do you greet someone over the phone in French?",
            "options": [
              "Âllo",
              "Bonjour",
              "Salut",
              "Comment allez-vous?"
            ],
            "answer": "Âllo"
          },
          {
            "question": "What is the phrase for 'See you tomorrow' in French?",
            "options": [
              "À demain",
              "À bientôt",
              "À tout à l’heure",
              "Au revoir"
            ],
            "answer": "À demain"
          },
          {
            "question": "How do you ask about someone's weekend in French?",
            "options": [
              "Comment s'est passée votre fin de semaine?",
              "Quelle a été votre journée?",
              "Comment allez-vous?",
              "Ça va?"
            ],
            "answer": "Comment s'est passée votre fin de semaine?"
          },
          {
            "question": "What is the informal way to say 'Hey there' in French?",
            "options": [
              "Coucou",
              "Salut",
              "Bonjour",
              "Enchanté/e"
            ],
            "answer": "Coucou"
          },
          {
            "question": "How do you say 'Thank you' in French, and what is a common response?",
            "options": [
              "Merci - De rien",
              "Merci - Je vous en prie",
              "Merci - Ça va",
              "Merci - Au revoir"
            ],
            "answer": "Merci - De rien"
          },
          {
            "question": "What is the formal way to introduce yourself in a business setting in French?",
            "options": [
              "Je m'appelle [Your Name].",
              "Je suis de [Your City/Country].",
              "Enchanté/e de faire votre connaissance.",
              "Ravi/e de vous rencontrer."
            ],
            "answer": "Enchanté/e de faire votre connaissance."
          },
          {
            "question": "How do you ask someone if they are doing well in a formal setting in French?",
            "options": [
              "Comment allez-vous?",
              "Comment ça va?",
              "Quoi de neuf?",
              "Ça roule?"
            ],
            "answer": "Comment allez-vous?"
          },
          {
            "question": "What is the phrase for 'See you in a little while' in French?",
            "options": [
              "À tout à l’heure",
              "À bientôt",
              "À demain",
              "Au revoir"
            ],
            "answer": "À tout à l’heure"
          },
          {
            "question": "How do you greet someone in the afternoon in French?",
            "options": [
              "Bonjour",
              "Bon après-midi",
              "Bonne journée",
              "Bonne soirée"
            ],
            "answer": "Bonjour"
          },
          {
            "question": "What is the informal way to ask 'What's up?' in French?",
            "options": [
              "Quoi de neuf?",
              "Comment ça va?",
              "Ça roule?",
              "Comment allez-vous?"
            ],
            "answer": "Quoi de neuf?"
          },
          {
            "question": "How do you say 'Good day' in a slightly more formal way in French?",
            "options": [
              "Bonjour",
              "Bonne journée",
              "Bonne soirée",
              "Bon après-midi"
            ],
            "answer": "Bonne journée"
          },
          {
            "question": "What is the phrase for 'I am fine, thank you' in French?",
            "options": [
              "Je vais bien, merci.",
              "Ça va bien, merci.",
              "Très bien, merci.",
              "Pas mal, merci."
            ],
            "answer": "Je vais bien, merci."
          },
          {
            "question": "How do you greet someone in a very informal and friendly manner in French?",
            "options": [
              "Salut",
              "Bonjour",
              "Coucou",
              "Enchanté/e"
            ],
            "answer": "Coucou"
          },
          {
            "question": "What is the formal way to express gratitude in French?",
            "options": [
              "Merci",
              "Je vous en prie",
              "De rien",
              "Mon plaisir"
            ],
            "answer": "Je vous en prie"
          },
          {
            "question": "How do you say 'So-so' when asked about your day in French?",
            "options": [
              "Très bien",
              "Bien",
              "Pas mal",
              "Comme ci, comme ça"
            ],
            "answer": "Comme ci, comme ça"
          }
        ], 
        spanish: [
          {
            "question": "What is the most common formal greeting in Spanish that can be used throughout the day?",
            "options": [
              "Buenos días",
              "Buenas tardes",
              "Buenas noches",
              "Hola"
            ],
            "answer": "Buenos días"
          },
          {
            "question": "How do you greet someone in the morning in Spanish?",
            "options": [
              "Buenos días",
              "Buenas tardes",
              "Buenas noches",
              "Hola"
            ],
            "answer": "Buenos días"
          },
          {
            "question": "What is the appropriate response to '¿Cómo está?' (How do you do?) in Spanish?",
            "options": [
              "Estoy bien, gracias.",
              "Estoy mal, gracias.",
              "No sé.",
              "¿Y usted?"
            ],
            "answer": "Estoy bien, gracias."
          },
          {
            "question": "How do you greet someone informally in Spanish?",
            "options": [
              "Hola",
              "Buenos días",
              "Buenas tardes",
              "Buenas noches"
            ],
            "answer": "Hola"
          },
          {
            "question": "What is the phrase for 'Nice to meet you' in Spanish?",
            "options": [
              "Mucho gusto",
              "Encantado/a de conocerte",
              "Hola, ¿cómo estás?",
              "Buenos días"
            ],
            "answer": "Mucho gusto"
          },
          {
            "question": "How do you say 'Good evening' in Spanish?",
            "options": [
              "Buenas noches",
              "Buenas tardes",
              "Buenos días",
              "Hola"
            ],
            "answer": "Buenas noches"
          },
          {
            "question": "What is the informal way to ask 'How are you?' in Spanish?",
            "options": [
              "¿Cómo estás?",
              "¿Cómo está?",
              "¿Qué tal?",
              "¿Qué onda?"
            ],
            "answer": "¿Cómo estás?"
          },
          {
            "question": "How do you introduce yourself in Spanish?",
            "options": [
              "Me llamo [Your Name].",
              "Soy de [Your City/Country].",
              "Vivo en [Your City/Country].",
              "All of the above"
            ],
            "answer": "All of the above"
          },
          {
            "question": "What is the phrase for 'See you later' in Spanish?",
            "options": [
              "Hasta luego",
              "Adiós",
              "Hasta pronto",
              "Nos vemos"
            ],
            "answer": "Hasta luego"
          },
          {
            "question": "How do you ask about someone's day in Spanish?",
            "options": [
              "¿Cómo ha sido tu día?",
              "¿Cómo ha sido tu semana?",
              "¿Cómo ha sido tu fin de semana?",
              "¿Qué tal?"
            ],
            "answer": "¿Cómo ha sido tu día?"
          },
          {
            "question": "What is the formal way to address someone in a letter or email in Spanish?",
            "options": [
              "Estimado/a [Last Name]",
              "Hola, señor/señora/docteur [Last Name]",
              "Mucho gusto",
              "Encantado/a de conocerte"
            ],
            "answer": "Estimado/a [Last Name]"
          },
          {
            "question": "How do you say 'Goodbye' formally in Spanish?",
            "options": [
              "Adiós",
              "Hasta luego",
              "Hasta pronto",
              "Nos vemos"
            ],
            "answer": "Adiós"
          },
          {
            "question": "What is the difference between 'tú' and 'usted' in Spanish greetings?",
            "options": [
              "'Tú' is formal, 'usted' is informal.",
              "'Tú' is informal, 'usted' is formal.",
              "They are used in different regions.",
              "They are used for different times of the day."
            ],
            "answer": "'Tú' is informal, 'usted' is formal."
          },
          {
            "question": "How do you greet someone over the phone in Spanish?",
            "options": [
              "¿Aló?",
              "Hola",
              "Buenos días",
              "Buenas tardes"
            ],
            "answer": "¿Aló?"
          },
          {
            "question": "What is the phrase for 'See you tomorrow' in Spanish?",
            "options": [
              "Hasta mañana",
              "Hasta luego",
              "Hasta pronto",
              "Adiós"
            ],
            "answer": "Hasta mañana"
          },
          {
            "question": "How do you ask about someone's weekend in Spanish?",
            "options": [
              "¿Cómo ha sido tu fin de semana?",
              "¿Cómo ha sido tu semana?",
              "¿Cómo ha sido tu día?",
              "¿Qué tal?"
            ],
            "answer": "¿Cómo ha sido tu fin de semana?"
          },
          {
            "question": "What is the informal way to say 'What's up?' in Spanish?",
            "options": [
              "¿Qué tal?",
              "¿Cómo estás?",
              "¿Qué onda?",
              "¿Cómo vas?"
            ],
            "answer": "¿Qué tal?"
          },
          {
            "question": "How do you say 'Thank you' in Spanish, and what is a common response?",
            "options": [
              "Gracias - De nada",
              "Gracias - Muchas gracias",
              "Gracias - Por nada",
              "Gracias - Adiós"
            ],
            "answer": "Gracias - De nada"
          },
          {
            "question": "How do you introduce yourself in a formal setting in Spanish?",
            "options": [
              "Me llamo [Your Name].",
              "Mucho gusto.",
              "Encantado/a de conocerte.",
              "Estimado/a [Last Name]"
            ],
            "answer": "Mucho gusto."
          },
          {
            "question": "How do you ask someone if they are doing well in a formal setting in Spanish?",
            "options": [
              "¿Cómo está?",
              "¿Cómo estás?",
              "¿Qué tal?",
              "¿Cómo vas?"
            ],
            "answer": "¿Cómo está?"
          },
          {
            "question": "What is the phrase for 'See you in a little while' in Spanish?",
            "options": [
              "Hasta pronto",
              "Hasta luego",
              "Hasta mañana",
              "Adiós"
            ],
            "answer": "Hasta pronto"
          },
          {
            "question": "How do you greet someone in the afternoon in Spanish?",
            "options": [
              "Buenos días",
              "Buenas tardes",
              "Buenas noches",
              "Hola"
            ],
            "answer": "Buenas tardes"
          },
          {
            "question": "What is the formal way to express 'Have a good day' in Spanish?",
            "options": [
              "Que tenga usted un buen día",
              "Que tengas un buen día",
              "Que tenga buen día",
              "Que tengas buen día"
            ],
            "answer": "Que tenga usted un buen día"
          },
          {
            "question": "How do you say 'It was nice to see you' in Spanish?",
            "options": [
              "Fue un placer verte",
              "Fue un gusto verte",
              "Fue un placer conocerte",
              "Fue un gusto conocerte"
            ],
            "answer": "Fue un placer verte"
          },
          {
            "question": "What is the informal way to greet someone in a very casual and friendly manner in Spanish?",
            "options": [
              "Hola",
              "¿Qué tal?",
              "¿Qué onda?",
              "¿Cómo estás?"
            ],
            "answer": "¿Qué onda?"
          },
          {
            "question": "How do you respond to '¿Cómo estás?' (How are you?) in an informal setting in Spanish?",
            "options": [
              "Estoy bien, gracias.",
              "Estoy mal, gracias.",
              "No sé.",
              "Todo bien."
            ],
            "answer": "Estoy bien, gracias."
          },
          {
            "question": "What is the phrase for 'Take care' when parting ways in Spanish?",
            "options": [
              "Cuídate",
              "Que te vaya bien",
              "Hasta luego",
              "Adiós"
            ],
            "answer": "Cuídate"
          }
        ]
      }
    }
  ]

  const love = [
    {
      topic: "love",
      languages: {
        english: [
          {
            "question": "What is the most direct way to express love in English?",
            "options": [
              "I love you",
              "You mean the world to me",
              "My heart belongs to you",
              "You are my everything"
            ],
            "answer": "I love you"
          },
          {
            "question": "What does the phrase 'You mean the world to me' mean?",
            "options": [
              "You are my best friend.",
              "You are extremely important to me.",
              "You are my favorite person.",
              "You are my partner."
            ],
            "answer": "You are extremely important to me."
          },
          {
            "question": "How do you express that someone is the most important part of your life in English?",
            "options": [
              "You are my everything.",
              "You mean the world to me.",
              "My heart belongs to you.",
              "I love you."
            ],
            "answer": "You are my everything."
          },
          {
            "question": "What is the meaning of 'My heart belongs to you'?",
            "options": [
              "My affection is shared with many people.",
              "My affection is exclusively for you.",
              "My heart is broken.",
              "My heart is full of love."
            ],
            "answer": "My affection is exclusively for you."
          },
          {
            "question": "How do you say 'I am very happy when I am with you' in a more romantic way?",
            "options": [
              "I am so happy when I am with you.",
              "You make me very happy.",
              "Being with you is wonderful.",
              "You are my joy."
            ],
            "answer": "I am so happy when I am with you."
          },
          {
            "question": "What does 'Love at first sight' mean?",
            "options": [
              "Falling in love after a long time.",
              "Falling in love immediately upon seeing someone.",
              "Falling in love after many dates.",
              "Falling in love through mutual friends."
            ],
            "answer": "Falling in love immediately upon seeing someone."
          },
          {
            "question": "What is the meaning of 'Head over heels in love'?",
            "options": [
              "Completely and utterly in love.",
              "Slightly in love.",
              "Not very in love.",
              "Falling out of love."
            ],
            "answer": "Completely and utterly in love."
          },
          {
            "question": "How do you express that someone is the central part of your life?",
            "options": [
              "You are my everything.",
              "You mean the world to me.",
              "My heart belongs to you.",
              "You are my best friend."
            ],
            "answer": "You are my everything."
          },
          {
            "question": "What is a romantic way to say 'You are very important to me'?",
            "options": [
              "You mean the world to me.",
              "You are my everything.",
              "My heart belongs to you.",
              "I love you."
            ],
            "answer": "You mean the world to me."
          },
          {
            "question": "How do you describe the feeling of being deeply in love in English?",
            "options": [
              "I am in love with you.",
              "You are my everything.",
              "Head over heels in love.",
              "My heart belongs to you."
            ],
            "answer": "Head over heels in love."
          },
          {
            "question": "What does 'I love you' typically mean in a romantic context?",
            "options": [
              "A friendly greeting.",
              "A familial expression.",
              "A direct expression of romantic love.",
              "A casual remark."
            ],
            "answer": "A direct expression of romantic love."
          },
          {
            "question": "How do you express that being with someone makes you very happy?",
            "options": [
              "I am so happy when I am with you.",
              "You make me very happy.",
              "Being with you is wonderful.",
              "You are my joy."
            ],
            "answer": "I am so happy when I am with you."
          },
          {
            "question": "What is an idiomatic way to describe falling deeply in love?",
            "options": [
              "Falling in love.",
              "Head over heels in love.",
              "Being in love.",
              "Having a crush."
            ],
            "answer": "Head over heels in love."
          },
          {
            "question": "How do you say 'You are the most important person in my life' in a romantic way?",
            "options": [
              "You are my everything.",
              "You mean the world to me.",
              "My heart belongs to you.",
              "You are my best friend."
            ],
            "answer": "You are my everything."
          },
          {
            "question": "What does 'My heart belongs to you' imply?",
            "options": [
              "My heart is broken.",
              "My heart is full of love.",
              "My affection is shared with many people.",
              "My affection is exclusively for you."
            ],
            "answer": "My affection is exclusively for you."
          },
          {
            "question": "How do you describe the immediate attraction of 'Love at first sight'?",
            "options": [
              "Falling in love after many dates.",
              "Falling in love through mutual friends.",
              "Falling in love immediately upon seeing someone.",
              "Falling in love after a long time."
            ],
            "answer": "Falling in love immediately upon seeing someone."
          },
          {
            "question": "What is a way to express that someone brings great joy to your life?",
            "options": [
              "I am so happy when I am with you.",
              "You make me very happy.",
              "Being with you is wonderful.",
              "You are my joy."
            ],
            "answer": "I am so happy when I am with you."
          },
          {
            "question": "How do you describe being completely smitten with someone?",
            "options": [
              "Head over heels in love.",
              "Being in love.",
              "Having a crush.",
              "Falling in love."
            ],
            "answer": "Head over heels in love."
          },
          {
            "question": "What does 'You mean the world to me' mean in a romantic context?",
            "options": [
              "You are my best friend.",
              "You are extremely important to me.",
              "You are my favorite person.",
              "You are my partner."
            ],
            "answer": "You are extremely important to me."
          },
          {
            "question": "How do you express that your heart is exclusively for someone?",
            "options": [
              "My heart belongs to you.",
              "You are my everything.",
              "You mean the world to me.",
              "I love you."
            ],
            "answer": "My heart belongs to you."
          },
          {
            "question": "What is an example of a romantic expression that emphasizes someone's importance?",
            "options": [
              "You are my everything.",
              "You mean the world to me.",
              "My heart belongs to you.",
              "I love you."
            ],
            "answer": "You mean the world to me."
          }
        ],
        hausa: [
          {
            "question": "What is the direct way to say 'I love you' in Hausa?",
            "options": [
              "Na so ka",
              "Na so ki",
              "Zuciya ta zama takarda, tawa ta zama biro in rubata miki shafin kauna",
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata"
            ],
            "answer": "Na so ka"
          },
          {
            "question": "What does the phrase 'Zuciya ta zama takarda, tawa ta zama biro in rubata miki shafin kauna' mean in Hausa?",
            "options": [
              "My heart is locked and has become calm.",
              "My heart has become paper, the pen has become my pen to write your love story.",
              "You be my foundation and my mud to build our house of love.",
              "Let us meet and open the door of our love."
            ],
            "answer": "My heart has become paper, the pen has become my pen to write your love story."
          },
          {
            "question": "How do you express the pain of your heart and the desire to build a life together in Hausa?",
            "options": [
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya",
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata",
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata",
              "Na so ka"
            ],
            "answer": "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya"
          },
          {
            "question": "What is the meaning of 'Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata' in Hausa?",
            "options": [
              "My heart is locked and has become calm, let us meet and open the door of our love.",
              "You be my foundation and my mud to build our house of love.",
              "My heart has become paper, the pen has become my pen to write your love story.",
              "Greetings from the company of love, the house of love, the home with the symbol of my heart."
            ],
            "answer": "My heart is locked and has become calm, let us meet and open the door of our love."
          },
          {
            "question": "How do you greet someone with a message of love in Hausa?",
            "options": [
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata",
              "Na so ka",
              "Zuciya ta zama takarda, tawa ta zama biro in rubata miki shafin kauna",
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata"
            ],
            "answer": "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata"
          },
          {
            "question": "What does 'Ya madarar zuciyata' mean in the context of expressing love in Hausa?",
            "options": [
              "Oh, the pain of my heart.",
              "My heart is locked and has become calm.",
              "You be my foundation and my mud to build our house of love.",
              "Let us meet and open the door of our love."
            ],
            "answer": "Oh, the pain of my heart."
          },
          {
            "question": "How do you express the depth of your feelings using a metaphor in Hausa?",
            "options": [
              "Na so ka",
              "Zuciya ta zama takarda, tawa ta zama biro in rubata miki shafin kauna",
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata",
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya"
            ],
            "answer": "Zuciya ta zama takarda, tawa ta zama biro in rubata miki shafin kauna"
          },
          {
            "question": "What is the phrase for expressing the desire to build a life together in Hausa?",
            "options": [
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya",
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata",
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata",
              "Na so ka"
            ],
            "answer": "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya"
          },
          {
            "question": "How do you say 'My heart is locked and has become calm' in Hausa?",
            "options": [
              "Kizama kofa na zamao makulli",
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya",
              "Zuciya ta zama takarda, tawa ta zama biro in rubata miki shafin kauna",
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata"
            ],
            "answer": "Kizama kofa na zamao makulli"
          },
          {
            "question": "What does 'Gaisuwa daga kamfanin so' mean in the context of love expressions in Hausa?",
            "options": [
              "Greetings from the company of love.",
              "My heart is locked and has become calm.",
              "You be my foundation and my mud to build our house of love.",
              "Let us meet and open the door of our love."
            ],
            "answer": "Greetings from the company of love."
          },
          {
            "question": "How do you express the idea of meeting and opening the door of love in Hausa?",
            "options": [
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata",
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya",
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata",
              "Na so ka"
            ],
            "answer": "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata"
          },
          {
            "question": "What is the phrase for 'You be my foundation and my mud to build our house of love' in Hausa?",
            "options": [
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya",
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata",
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata",
              "Na so ka"
            ],
            "answer": "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya"
          },
          {
            "question": "How do you greet someone with a message that includes the symbol of your heart in Hausa?",
            "options": [
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata",
              "Na so ka",
              "Zuciya ta zama takarda, tawa ta zama biro in rubata miki shafin kauna",
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata"
            ],
            "answer": "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata"
          },
          {
            "question": "What does 'Ina son ki' mean in Hausa, and to whom is it addressed?",
            "options": [
              "I love you, addressed to a male.",
              "I love you, addressed to a female.",
              "My heart has become paper, addressed to anyone.",
              "You be my foundation, addressed to anyone."
            ],
            "answer": "I love you, addressed to a female."
          },
          {
            "question": "How do you express the idea of being deeply in love and wanting to meet in Hausa?",
            "options": [
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata",
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya",
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata",
              "Na so ka"
            ],
            "answer": "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata"
          },
          {
            "question": "What is the meaning of 'Zuciya ta zama takarda' in the context of love expressions in Hausa?",
            "options": [
              "My heart is locked and has become calm.",
              "My heart has become paper.",
              "You be my foundation and my mud to build our house of love.",
              "Greetings from the company of love."
            ],
            "answer": "My heart has become paper."
          },
          {
            "question": "How do you express the idea of writing your love story in Hausa?",
            "options": [
              "Zuciya ta zama takarda, tawa ta zama biro in rubata miki shafin kauna",
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata",
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya",
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata"
            ],
            "answer": "Zuciya ta zama takarda, tawa ta zama biro in rubata miki shafin kauna"
          },
          {
            "question": "What is the phrase for 'My heart has become calm, let us meet and open the door of our love' in Hausa?",
            "options": [
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata",
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya",
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata",
              "Na so ka"
            ],
            "answer": "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata"
          },
          {
            "question": "How do you express that someone is the foundation and the mud to build your house of love in Hausa?",
            "options": [
              "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya",
              "Kizama kofa na zamao makulli, mu hadu mu bude kofar soyyar lambun zuciyata",
              "Gaisuwa daga kamfanin so, harabar kauna, gida mai lambar zuciyata layin begen ki, zuwa ga rabin rayuwata",
              "Na so ka"
            ],
            "answer": "Ya madarar zuciyata, ki zamo ciminti in zamo bulo mu gina gidan quana a filin soyayya"
          }
        ],
        french: [
          {
            "question": "What is the most direct way to say 'I love you' in French?",
            "options": [
              "Je t'aime",
              "Tu es tout pour moi",
              "Mon cœur t'appartient",
              "Je suis amoureux/amoureuse de toi"
            ],
            "answer": "Je t'aime"
          },
          {
            "question": "What does the phrase 'Tu es tout pour moi' mean in French?",
            "options": [
              "You are my everything.",
              "You mean the world to me.",
              "My heart belongs to you.",
              "I am so happy when I am with you."
            ],
            "answer": "You mean the world to me."
          },
          {
            "question": "How do you express that someone is the most important part of your life in French?",
            "options": [
              "Tu es ma vie",
              "Tu es tout pour moi",
              "Mon cœur t'appartient",
              "Je suis si heureux quand je suis avec toi"
            ],
            "answer": "Tu es ma vie"
          },
          {
            "question": "What is the meaning of 'Mon cœur t'appartient' in French?",
            "options": [
              "My heart is yours.",
              "You mean the world to me.",
              "I am so happy when I am with you.",
              "You are my everything."
            ],
            "answer": "My heart is yours."
          },
          {
            "question": "How do you say 'I am so happy when I am with you' in a more romantic way in French?",
            "options": [
              "Je suis si heureux quand je suis avec toi",
              "Tu es ma vie",
              "Tu es tout pour moi",
              "Mon cœur t'appartient"
            ],
            "answer": "Je suis si heureux quand je suis avec toi"
          },
          {
            "question": "What does 'Coup de foudre' mean in French?",
            "options": [
              "Love at first sight",
              "To live on love and fresh water",
              "To fall deeply in love",
              "To be very happy together"
            ],
            "answer": "Love at first sight"
          },
          {
            "question": "What is the meaning of 'Vivre d'amour et d'eau fraiche' in French?",
            "options": [
              "To live on love and fresh water",
              "To fall deeply in love",
              "To be very happy together",
              "Love at first sight"
            ],
            "answer": "To live on love and fresh water"
          },
          {
            "question": "How do you express that someone is the joy of your life in French?",
            "options": [
              "Tu es ma joie de vivre",
              "Tu es ma vie",
              "Tu es tout pour moi",
              "Mon cœur t'appartient"
            ],
            "answer": "Tu es ma joie de vivre"
          },
          {
            "question": "What is the phrase for 'You are my heart' in French?",
            "options": [
              "Tu es mon cœur",
              "Tu es ma vie",
              "Tu es tout pour moi",
              "Mon cœur t'appartient"
            ],
            "answer": "Tu es mon cœur"
          },
          {
            "question": "How do you say 'I adore you' in a more intense way in French?",
            "options": [
              "Je t'adore",
              "Je t'aime",
              "Tu es ma vie",
              "Je suis si heureux quand je suis avec toi"
            ],
            "answer": "Je t'adore"
          },
          {
            "question": "What does 'Tomber amoureux/amoureuse de quelqu'un' mean in French?",
            "options": [
              "To fall in love with someone",
              "To love someone deeply",
              "To be very happy together",
              "To live on love and fresh water"
            ],
            "answer": "To fall in love with someone"
          },
          {
            "question": "How do you express that you are deeply attracted to someone in French?",
            "options": [
              "Craquer pour quelqu'un",
              "Avoir un coup de foudre",
              "Tomber amoureux/amoureuse de quelqu'un",
              "Je suis si heureux quand je suis avec toi"
            ],
            "answer": "Craquer pour quelqu'un"
          },
          {
            "question": "What is the phrase for 'You are my treasure' in French?",
            "options": [
              "Tu es mon trésor",
              "Tu es ma vie",
              "Tu es tout pour moi",
              "Mon cœur t'appartient"
            ],
            "answer": "Tu es mon trésor"
          },
          {
            "question": "How do you say 'You are my angel' in French?",
            "options": [
              "Tu es mon ange",
              "Tu es ma vie",
              "Tu es tout pour moi",
              "Mon cœur t'appartient"
            ],
            "answer": "Tu es mon ange"
          },
          {
            "question": "What does 'Être fleur bleue' mean in French?",
            "options": [
              "To be sentimental and romantic",
              "To fall in love at first sight",
              "To be very happy together",
              "To live on love and fresh water"
            ],
            "answer": "To be sentimental and romantic"
          },
          {
            "question": "How do you express that you miss someone in French?",
            "options": [
              "Tu me manques",
              "Je suis si heureux quand je suis avec toi",
              "Tu es ma vie",
              "Mon cœur t'appartient"
            ],
            "answer": "Tu me manques"
          },
          {
            "question": "What is the phrase for 'You are my half' in French?",
            "options": [
              "Tu es ma moitié",
              "Tu es ma vie",
              "Tu es tout pour moi",
              "Mon cœur t'appartient"
            ],
            "answer": "Tu es ma moitié"
          },
          {
            "question": "How do you say 'I want to be with you' in French?",
            "options": [
              "Je veux être avec toi",
              "Je suis si heureux quand je suis avec toi",
              "Tu es ma vie",
              "Mon cœur t'appartient"
            ],
            "answer": "Je veux être avec toi"
          },
          {
            "question": "What does 'Faire les yeux doux' mean in French?",
            "options": [
              "To look at someone with tenderness and love",
              "To fall in love at first sight",
              "To be very happy together",
              "To live on love and fresh water"
            ],
            "answer": "To look at someone with tenderness and love"
          },
          {
            "question": "How do you express that you are passionately in love in French?",
            "options": [
              "Aimer à la folie",
              "Tomber amoureux/amoureuse de quelqu'un",
              "Craquer pour quelqu'un",
              "Je suis si heureux quand je suis avec toi"
            ],
            "answer": "Aimer à la folie"
          },
          {
            "question": "What is the phrase for 'Love conquers all' in French?",
            "options": [
              "L'amour triomphe de tout",
              "Tomber amoureux/amoureuse de quelqu'un",
              "Craquer pour quelqu'un",
              "Je suis si heureux quand je suis avec toi"
            ],
            "answer": "L'amour triomphe de tout"
          }
        ],
        spanish: [
          {
            "question": "What is the most direct way to say 'I love you' in Spanish?",
            "options": [
              "Te amo",
              "Eres todo para mí",
              "Mi corazón es tuyo",
              "Te quiero"
            ],
            "answer": "Te amo"
          },
          {
            "question": "What does the phrase 'Eres todo para mí' mean in Spanish?",
            "options": [
              "You are my everything.",
              "You mean the world to me.",
              "My heart belongs to you.",
              "I am so happy when I am with you."
            ],
            "answer": "You mean the world to me."
          },
          {
            "question": "How do you express that someone is the most important part of your life in Spanish?",
            "options": [
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo",
              "Estoy tan feliz cuando estoy contigo"
            ],
            "answer": "Eres mi todo"
          },
          {
            "question": "What is the meaning of 'Mi corazón es tuyo' in Spanish?",
            "options": [
              "My heart is yours.",
              "You mean the world to me.",
              "I am so happy when I am with you.",
              "You are my everything."
            ],
            "answer": "My heart is yours."
          },
          {
            "question": "How do you say 'I am so happy when I am with you' in a more romantic way in Spanish?",
            "options": [
              "Estoy tan feliz cuando estoy contigo",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Estoy tan feliz cuando estoy contigo"
          },
          {
            "question": "What does 'Enamorarse a primera vista' mean in Spanish?",
            "options": [
              "To fall in love at first sight",
              "To fall deeply in love",
              "To be very happy together",
              "Love is blind, but not the neighbors"
            ],
            "answer": "To fall in love at first sight"
          },
          {
            "question": "What is the phrase for 'You are my soulmate' in Spanish?",
            "options": [
              "Eres mi alma gemela",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Eres mi alma gemela"
          },
          {
            "question": "How do you express that you cannot live without someone in Spanish?",
            "options": [
              "No puedo vivir sin ti",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "No puedo vivir sin ti"
          },
          {
            "question": "What does 'Te adoro' mean in Spanish?",
            "options": [
              "I love you",
              "I adore you",
              "You mean the world to me",
              "My heart belongs to you"
            ],
            "answer": "I adore you"
          },
          {
            "question": "How do you say 'You are my better half' in Spanish?",
            "options": [
              "Eres mi media naranja",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Eres mi media naranja"
          },
          {
            "question": "What is the phrase for 'I love you more each day' in Spanish?",
            "options": [
              "Cada día te quiero más",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Cada día te quiero más"
          },
          {
            "question": "How do you express that someone is the love of your life in Spanish?",
            "options": [
              "Eres el amor de mi vida",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Eres el amor de mi vida"
          },
          {
            "question": "What does 'Me encantas' mean in Spanish?",
            "options": [
              "I like you",
              "I like you a lot",
              "I am enchanted by you",
              "I adore you"
            ],
            "answer": "I am enchanted by you"
          },
          {
            "question": "How do you say 'You make me happy' in a more romantic way in Spanish?",
            "options": [
              "Tú me haces feliz",
              "Estoy tan feliz cuando estoy contigo",
              "Eres mi todo",
              "Eres todo para mí"
            ],
            "answer": "Tú me haces feliz"
          },
          {
            "question": "What is the phrase for 'You are my treasure' in Spanish?",
            "options": [
              "Eres mi tesoro",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Eres mi tesoro"
          },
          {
            "question": "How do you express that someone is always on your mind in Spanish?",
            "options": [
              "Pienso en ti siempre",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Pienso en ti siempre"
          },
          {
            "question": "What does 'Estoy enamorado/a de ti' mean in Spanish?",
            "options": [
              "I am in love with you",
              "I love you",
              "You mean the world to me",
              "My heart belongs to you"
            ],
            "answer": "I am in love with you"
          },
          {
            "question": "How do you say 'You complete me' in Spanish?",
            "options": [
              "Tú me complementas",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Tú me complementas"
          },
          {
            "question": "What is the phrase for 'I love you from the bottom of my heart' in Spanish?",
            "options": [
              "Te amo desde el fondo de mi corazón",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Te amo desde el fondo de mi corazón"
          },
          {
            "question": "How do you express that you want to be with someone forever in Spanish?",
            "options": [
              "Quiero estar contigo para siempre",
              "Eres mi todo",
              "Eres todo para mí",
              "Mi corazón es tuyo"
            ],
            "answer": "Quiero estar contigo para siempre"
          },
          {
            "question": "What does 'Flechazo' mean in Spanish?",
            "options": [
              "Love at first sight",
              "To fall deeply in love",
              "To be very happy together",
              "You are my everything"
            ],
            "answer": "Love at first sight"
          }
        ]
      }
    }
  ]

  const buying = [
    {
      topic: "Buying things",
      languages: {
        english: [
          {
            "question": "What is the most common way to ask about the price of an item in English?",
            "options": [
              "How much does this cost?",
              "What is the price of this?",
              "Is this on sale?",
              "Do you have any discounts?"
            ],
            "answer": "How much does this cost?"
          },
          {
            "question": "How do you ask if an item is discounted in English?",
            "options": [
              "Is this on sale?",
              "Do you have any discounts?",
              "Can I get a better price?",
              "How much does this cost?"
            ],
            "answer": "Is this on sale?"
          },
          {
            "question": "What phrase do you use to express your intent to purchase an item in English?",
            "options": [
              "I would like to buy this.",
              "I’ll take it.",
              "Can I pay by card?",
              "Where can I find the checkout?"
            ],
            "answer": "I would like to buy this."
          },
          {
            "question": "How do you ask if you can pay with a credit or debit card in English?",
            "options": [
              "Can I pay by card?",
              "Do you accept cash?",
              "Where can I find the checkout?",
              "I’ll take it."
            ],
            "answer": "Can I pay by card?"
          },
          {
            "question": "What phrase do you use to ask for assistance in finding an item in English?",
            "options": [
              "Can you help me find [Item]?",
              "Where can I find [Item]?",
              "Do you have this in a different size/color?",
              "Can you recommend a good [Product]?"
            ],
            "answer": "Can you help me find [Item]?"
          },
          {
            "question": "How do you ask about the availability of an item in a different size or color in English?",
            "options": [
              "Do you have this in a different size/color?",
              "Can you help me find [Item]?",
              "Where can I find [Item]?",
              "Can you recommend a good [Product]?"
            ],
            "answer": "Do you have this in a different size/color?"
          },
          {
            "question": "What phrase do you use to request a receipt in English?",
            "options": [
              "Can I have a receipt, please?",
              "What is your return policy?",
              "Can I return this if it doesn't fit?",
              "How much does this cost?"
            ],
            "answer": "Can I have a receipt, please?"
          },
          {
            "question": "How do you inquire about the return policy in English?",
            "options": [
              "What is your return policy?",
              "Can I have a receipt, please?",
              "Can I return this if it doesn't fit?",
              "Is this on sale?"
            ],
            "answer": "What is your return policy?"
          },
          {
            "question": "What phrase do you use to ask if you can return an item that doesn't fit in English?",
            "options": [
              "Can I return this if it doesn't fit?",
              "What is your return policy?",
              "Can I have a receipt, please?",
              "Do you have any discounts?"
            ],
            "answer": "Can I return this if it doesn't fit?"
          },
          {
            "question": "How do you ask where the payment area is in English?",
            "options": [
              "Where can I find the checkout?",
              "Can I pay by card?",
              "Do you accept cash?",
              "I’ll take it."
            ],
            "answer": "Where can I find the checkout?"
          },
          {
            "question": "What phrase do you use to ask if there are any available discounts in English?",
            "options": [
              "Do you have any discounts?",
              "Is this on sale?",
              "Can I get a better price?",
              "How much does this cost?"
            ],
            "answer": "Do you have any discounts?"
          },
          {
            "question": "How do you express your decision to buy an item in English?",
            "options": [
              "I’ll take it.",
              "I would like to buy this.",
              "Can I pay by card?",
              "Where can I find the checkout?"
            ],
            "answer": "I’ll take it."
          },
          {
            "question": "What phrase do you use to ask if cash is an accepted payment method in English?",
            "options": [
              "Do you accept cash?",
              "Can I pay by card?",
              "Where can I find the checkout?",
              "I’ll take it."
            ],
            "answer": "Do you accept cash?"
          },
          {
            "question": "How do you ask for a recommendation for a good product in English?",
            "options": [
              "Can you recommend a good [Product]?",
              "Can you help me find [Item]?",
              "Where can I find [Item]?",
              "Do you have this in a different size/color?"
            ],
            "answer": "Can you recommend a good [Product]?"
          },
          {
            "question": "What phrase do you use to ask if there is room for negotiation on the price in English?",
            "options": [
              "Can I get a better price?",
              "Is this on sale?",
              "Do you have any discounts?",
              "How much does this cost?"
            ],
            "answer": "Can I get a better price?"
          },
          {
            "question": "How do you ask where an item is located in the store in English?",
            "options": [
              "Where can I find [Item]?",
              "Can you help me find [Item]?",
              "Do you have this in a different size/color?",
              "Can you recommend a good [Product]?"
            ],
            "answer": "Where can I find [Item]?"
          },
          {
            "question": "What phrase do you use to indicate you are just browsing in English?",
            "options": [
              "I’m just looking, thanks.",
              "Can I help you find something?",
              "How much does this cost?",
              "I would like to buy this."
            ],
            "answer": "I’m just looking, thanks."
          },
          {
            "question": "How do you ask if an item comes with a guarantee in English?",
            "options": [
              "Does it come with a guarantee?",
              "Can I have a receipt, please?",
              "What is your return policy?",
              "Can I return this if it doesn't fit?"
            ],
            "answer": "Does it come with a guarantee?"
          },
          {
            "question": "What phrase do you use to ask if the store delivers items in English?",
            "options": [
              "Do you deliver?",
              "Can I pay by card?",
              "Where can I find the checkout?",
              "I’ll take it."
            ],
            "answer": "Do you deliver?"
          },
          {
            "question": "How do you ask if there are any promotions or deals available for a product in English?",
            "options": [
              "Are there any promotions or deals available for this product?",
              "Is this on sale?",
              "Do you have any discounts?",
              "Can I get a better price?"
            ],
            "answer": "Are there any promotions or deals available for this product?"
          }
        ],
        hausa: [
          {
            "question": "What is the most common way to ask about the price of an item in Hausa?",
            "options": [
              "Nawa ne wannan?",
              "Mene ne farashin [Kaya]?",
              "Shin wannan yana kan rangwame?",
              "Shin kuna da rangwame?"
            ],
            "answer": "Nawa ne wannan?"
          },
          {
            "question": "How do you ask if an item is on sale in Hausa?",
            "options": [
              "Shin wannan yana kan rangwame?",
              "Shin kuna da rangwame?",
              "Nawa ne wannan?",
              "Mene ne farashin [Kaya]?"
            ],
            "answer": "Shin wannan yana kan rangwame?"
          },
          {
            "question": "What phrase do you use to express your intent to buy an item in Hausa?",
            "options": [
              "Zan so in sayi wannan.",
              "Zan dauka.",
              "Shin zan iya biyan kudi ta katin kudi?",
              "Ina zan sami wurin biyan kudi?"
            ],
            "answer": "Zan so in sayi wannan."
          },
          {
            "question": "How do you ask if you can pay by card in Hausa?",
            "options": [
              "Shin zan iya biyan kudi ta katin kudi?",
              "Shin kuna karɓan kudi?",
              "Ina zan sami wurin biyan kudi?",
              "Zan dauka."
            ],
            "answer": "Shin zan iya biyan kudi ta katin kudi?"
          },
          {
            "question": "What phrase do you use to ask for assistance in finding an item in Hausa?",
            "options": [
              "Za ka iya taimaka mini samun [Kaya]?",
              "Ina zan sami [Kaya]?",
              "Shin kuna da wannan a cikin wani girma/launi?",
              "Za ka iya ba ni shawara kan kyakkyawan [Kayan]?"
            ],
            "answer": "Za ka iya taimaka mini samun [Kaya]?"
          },
          {
            "question": "How do you ask where an item is located in Hausa?",
            "options": [
              "Ina zan sami [Kaya]?",
              "Za ka iya taimaka mini samun [Kaya]?",
              "Shin kuna da wannan a cikin wani girma/launi?",
              "Za ka iya ba ni shawara kan kyakkyawan [Kayan]?"
            ],
            "answer": "Ina zan sami [Kaya]?"
          },
          {
            "question": "What phrase do you use to request a receipt in Hausa?",
            "options": [
              "Zan iya samun rasit, don Allah?",
              "Menene tsarin mayarwa?",
              "Shin zan iya mayar da wannan idan ba ya dace?",
              "Nawa ne wannan?"
            ],
            "answer": "Zan iya samun rasit, don Allah?"
          },
          {
            "question": "How do you inquire about the return policy in Hausa?",
            "options": [
              "Menene tsarin mayarwa?",
              "Zan iya samun rasit, don Allah?",
              "Shin zan iya mayar da wannan idan ba ya dace?",
              "Nawa ne wannan?"
            ],
            "answer": "Menene tsarin mayarwa?"
          },
          {
            "question": "What phrase do you use to ask if you can return an item that doesn't fit in Hausa?",
            "options": [
              "Shin zan iya mayar da wannan idan ba ya dace?",
              "Menene tsarin mayarwa?",
              "Zan iya samun rasit, don Allah?",
              "Nawa ne wannan?"
            ],
            "answer": "Shin zan iya mayar da wannan idan ba ya dace?"
          },
          {
            "question": "How do you ask where the payment area is in Hausa?",
            "options": [
              "Ina zan sami wurin biyan kudi?",
              "Shin zan iya biyan kudi ta katin kudi?",
              "Shin kuna karɓan kudi?",
              "Zan dauka."
            ],
            "answer": "Ina zan sami wurin biyan kudi?"
          },
          {
            "question": "What phrase do you use to ask if there are any available discounts in Hausa?",
            "options": [
              "Shin kuna da rangwame?",
              "Shin wannan yana kan rangwame?",
              "Nawa ne wannan?",
              "Mene ne farashin [Kaya]?"
            ],
            "answer": "Shin kuna da rangwame?"
          },
          {
            "question": "How do you express your decision to buy an item in Hausa?",
            "options": [
              "Zan dauka.",
              "Zan so in sayi wannan.",
              "Shin zan iya biyan kudi ta katin kudi?",
              "Ina zan sami wurin biyan kudi?"
            ],
            "answer": "Zan dauka."
          },
          {
            "question": "What phrase do you use to ask if cash is an accepted payment method in Hausa?",
            "options": [
              "Shin kuna karɓan kudi?",
              "Shin zan iya biyan kudi ta katin kudi?",
              "Ina zan sami wurin biyan kudi?",
              "Zan dauka."
            ],
            "answer": "Shin kuna karɓan kudi?"
          },
          {
            "question": "How do you ask for a recommendation for a good product in Hausa?",
            "options": [
              "Za ka iya ba ni shawara kan kyakkyawan [Kayan]?",
              "Za ka iya taimaka mini samun [Kaya]?",
              "Ina zan sami [Kaya]?",
              "Shin kuna da wannan a cikin wani girma/launi?"
            ],
            "answer": "Za ka iya ba ni shawara kan kyakkyawan [Kayan]?"
          },
          {
            "question": "What phrase do you use to ask if there is room for negotiation on the price in Hausa?",
            "options": [
              "Za a iya samun kudi mafi kyau?",
              "Shin wannan yana kan rangwame?",
              "Shin kuna da rangwame?",
              "Nawa ne wannan?"
            ],
            "answer": "Za a iya samun kudi mafi kyau?"
          },
          {
            "question": "How do you ask where an item is located in the store in Hausa?",
            "options": [
              "Ina zan sami [Kaya]?",
              "Za ka iya taimaka mini samun [Kaya]?",
              "Shin kuna da wannan a cikin wani girma/launi?",
              "Za ka iya ba ni shawara kan kyakkyawan [Kayan]?"
            ],
            "answer": "Ina zan sami [Kaya]?"
          },
          {
            "question": "What phrase do you use to indicate you are just browsing in Hausa?",
            "options": [
              "Na ke kallon kawai.",
              "Nawa ne wannan?",
              "Zan so in sayi wannan.",
              "Ina zan sami wurin biyan kudi?"
            ],
            "answer": "Na ke kallon kawai."
          },
          {
            "question": "How do you ask if an item comes with a guarantee in Hausa?",
            "options": [
              "Shin wannan yana da tabbatarwa?",
              "Zan iya samun rasit, don Allah?",
              "Menene tsarin mayarwa?",
              "Shin zan iya mayar da wannan idan ba ya dace?"
            ],
            "answer": "Shin wannan yana da tabbatarwa?"
          },
          {
            "question": "What phrase do you use to ask if the store delivers items in Hausa?",
            "options": [
              "Shin kuna aikawa?",
              "Shin zan iya biyan kudi ta katin kudi?",
              "Ina zan sami wurin biyan kudi?",
              "Zan dauka."
            ],
            "answer": "Shin kuna aikawa?"
          },
          {
            "question": "How do you ask if there are any promotions or deals available for a product in Hausa?",
            "options": [
              "Shin kuna da tarinawa ko sauki?",
              "Shin wannan yana kan rangwame?",
              "Shin kuna da rangwame?",
              "Nawa ne wannan?"
            ],
            "answer": "Shin kuna da tarinawa ko sauki?"
          }
        ],
        french: [
          {
            "question": "What is the most common way to ask about the price of an item in French?",
            "options": [
              "Combien ça coûte?",
              "Quel est le prix de [Article]?",
              "Est-ce que c'est en solde?",
              "Avez-vous des réductions?"
            ],
            "answer": "Combien ça coûte?"
          },
          {
            "question": "How do you ask if an item is on sale in French?",
            "options": [
              "Est-ce que c'est en solde?",
              "Avez-vous des réductions?",
              "Combien ça coûte?",
              "Quel est le prix de [Article]?"
            ],
            "answer": "Est-ce que c'est en solde?"
          },
          {
            "question": "What phrase do you use to express your intent to buy an item in French?",
            "options": [
              "Je voudrais acheter ça.",
              "Je vais le prendre.",
              "Puis-je payer par carte?",
              "Acceptez-vous les espèces?"
            ],
            "answer": "Je voudrais acheter ça."
          },
          {
            "question": "How do you ask if you can pay by card in French?",
            "options": [
              "Puis-je payer par carte?",
              "Acceptez-vous les espèces?",
              "Où puis-je trouver la caisse?",
              "Je vais le prendre."
            ],
            "answer": "Puis-je payer par carte?"
          },
          {
            "question": "What phrase do you use to ask for assistance in finding an item in French?",
            "options": [
              "Pouvez-vous m'aider à trouver [Article]?",
              "Où puis-je trouver [Article]?",
              "Avez-vous cela dans une autre taille/couleur?",
              "Pouvez-vous recommander un bon [Produit]?"
            ],
            "answer": "Pouvez-vous m'aider à trouver [Article]?"
          },
          {
            "question": "How do you ask where an item is located in French?",
            "options": [
              "Où puis-je trouver [Article]?",
              "Pouvez-vous m'aider à trouver [Article]?",
              "Avez-vous cela dans une autre taille/couleur?",
              "Pouvez-vous recommander un bon [Produit]?"
            ],
            "answer": "Où puis-je trouver [Article]?"
          },
          {
            "question": "What phrase do you use to request a receipt in French?",
            "options": [
              "Puis-je avoir un reçu, s'il vous plaît?",
              "Quelle est votre politique de retour?",
              "Puis-je retourner cela s'il ne me va pas?",
              "Combien ça coûte?"
            ],
            "answer": "Puis-je avoir un reçu, s'il vous plaît?"
          },
          {
            "question": "How do you inquire about the return policy in French?",
            "options": [
              "Quelle est votre politique de retour?",
              "Puis-je avoir un reçu, s'il vous plaît?",
              "Puis-je retourner cela s'il ne me va pas?",
              "Combien ça coûte?"
            ],
            "answer": "Quelle est votre politique de retour?"
          },
          {
            "question": "What phrase do you use to ask if you can return an item that doesn't fit in French?",
            "options": [
              "Puis-je retourner cela s'il ne me va pas?",
              "Quelle est votre politique de retour?",
              "Puis-je avoir un reçu, s'il vous plaît?",
              "Combien ça coûte?"
            ],
            "answer": "Puis-je retourner cela s'il ne me va pas?"
          },
          {
            "question": "How do you ask where the payment area is in French?",
            "options": [
              "Où puis-je trouver la caisse?",
              "Puis-je payer par carte?",
              "Acceptez-vous les espèces?",
              "Je vais le prendre."
            ],
            "answer": "Où puis-je trouver la caisse?"
          },
          {
            "question": "What phrase do you use to ask if there are any available discounts in French?",
            "options": [
              "Avez-vous des réductions?",
              "Est-ce que c'est en solde?",
              "Combien ça coûte?",
              "Quel est le prix de [Article]?"
            ],
            "answer": "Avez-vous des réductions?"
          },
          {
            "question": "How do you express your decision to buy an item in French?",
            "options": [
              "Je vais le prendre.",
              "Je voudrais acheter ça.",
              "Puis-je payer par carte?",
              "Où puis-je trouver la caisse?"
            ],
            "answer": "Je vais le prendre."
          },
          {
            "question": "What phrase do you use to ask if cash is an accepted payment method in French?",
            "options": [
              "Acceptez-vous les espèces?",
              "Puis-je payer par carte?",
              "Où puis-je trouver la caisse?",
              "Je vais le prendre."
            ],
            "answer": "Acceptez-vous les espèces?"
          },
          {
            "question": "How do you ask for a recommendation for a good product in French?",
            "options": [
              "Pouvez-vous recommander un bon [Produit]?",
              "Pouvez-vous m'aider à trouver [Article]?",
              "Où puis-je trouver [Article]?",
              "Avez-vous cela dans une autre taille/couleur?"
            ],
            "answer": "Pouvez-vous recommander un bon [Produit]?"
          },
          {
            "question": "What phrase do you use to ask if there is room for negotiation on the price in French?",
            "options": [
              "Puis-je avoir un meilleur prix?",
              "Est-ce que c'est en solde?",
              "Avez-vous des réductions?",
              "Combien ça coûte?"
            ],
            "answer": "Puis-je avoir un meilleur prix?"
          },
          {
            "question": "How do you ask where an item is located in the store in French?",
            "options": [
              "Où puis-je trouver [Article]?",
              "Pouvez-vous m'aider à trouver [Article]?",
              "Avez-vous cela dans une autre taille/couleur?",
              "Pouvez-vous recommander un bon [Produit]?"
            ],
            "answer": "Où puis-je trouver [Article]?"
          },
          {
            "question": "What phrase do you use to indicate you are just browsing in French?",
            "options": [
              "Je regarde seulement.",
              "Combien ça coûte?",
              "Je voudrais acheter ça.",
              "Où puis-je trouver la caisse?"
            ],
            "answer": "Je regarde seulement."
          },
          {
            "question": "How do you ask if an item comes with a guarantee in French?",
            "options": [
              "Est-ce que ceci est garanti?",
              "Puis-je avoir un reçu, s'il vous plaît?",
              "Quelle est votre politique de retour?",
              "Puis-je retourner cela s'il ne me va pas?"
            ],
            "answer": "Est-ce que ceci est garanti?"
          },
          {
            "question": "What phrase do you use to ask if the store delivers items in French?",
            "options": [
              "Livrez-vous?",
              "Puis-je payer par carte?",
              "Où puis-je trouver la caisse?",
              "Je vais le prendre."
            ],
            "answer": "Livrez-vous?"
          },
          {
            "question": "How do you ask if there are any promotions or deals available for a product in French?",
            "options": [
              "Avez-vous des promotions ou des offres spéciales?",
              "Est-ce que c'est en solde?",
              "Avez-vous des réductions?",
              "Combien ça coûte?"
            ],
            "answer": "Avez-vous des promotions ou des offres spéciales?"
          }
        ],
        spanish: [
          {
            "question": "What is the most common way to ask about the price of an item in Spanish?",
            "options": [
              "¿Cuánto cuesta esto?",
              "¿Cuál es el precio de [Artículo]?",
              "¿Está en oferta?",
              "¿Tienen descuentos?"
            ],
            "answer": "¿Cuánto cuesta esto?"
          },
          {
            "question": "How do you ask if an item is on sale in Spanish?",
            "options": [
              "¿Está en oferta?",
              "¿Tienen descuentos?",
              "¿Cuánto cuesta esto?",
              "¿Cuál es el precio de [Artículo]?"
            ],
            "answer": "¿Está en oferta?"
          },
          {
            "question": "What phrase do you use to express your intent to buy an item in Spanish?",
            "options": [
              "Me gustaría comprar esto.",
              "Me lo llevo.",
              "¿Puedo pagar con tarjeta?",
              "¿Aceptan efectivo?"
            ],
            "answer": "Me gustaría comprar esto."
          },
          {
            "question": "How do you ask if you can pay by card in Spanish?",
            "options": [
              "¿Puedo pagar con tarjeta?",
              "¿Aceptan efectivo?",
              "¿Dónde está la caja?",
              "Me lo llevo."
            ],
            "answer": "¿Puedo pagar con tarjeta?"
          },
          {
            "question": "What phrase do you use to ask for assistance in finding an item in Spanish?",
            "options": [
              "¿Puedes ayudarme a encontrar [Artículo]?",
              "¿Dónde puedo encontrar [Artículo]?",
              "¿Tienes esto en otro tamaño/color?",
              "¿Puedes recomendar un buen [Producto]?"
            ],
            "answer": "¿Puedes ayudarme a encontrar [Artículo]?"
          },
          {
            "question": "How do you ask where an item is located in Spanish?",
            "options": [
              "¿Dónde puedo encontrar [Artículo]?",
              "¿Puedes ayudarme a encontrar [Artículo]?",
              "¿Tienes esto en otro tamaño/color?",
              "¿Puedes recomendar un buen [Producto]?"
            ],
            "answer": "¿Dónde puedo encontrar [Artículo]?"
          },
          {
            "question": "What phrase do you use to request a receipt in Spanish?",
            "options": [
              "¿Puedo tener un recibo, por favor?",
              "¿Cuál es su política de devoluciones?",
              "¿Puedo devolver esto si no me queda?",
              "¿Cuánto cuesta esto?"
            ],
            "answer": "¿Puedo tener un recibo, por favor?"
          },
          {
            "question": "How do you inquire about the return policy in Spanish?",
            "options": [
              "¿Cuál es su política de devoluciones?",
              "¿Puedo tener un recibo, por favor?",
              "¿Puedo devolver esto si no me queda?",
              "¿Cuánto cuesta esto?"
            ],
            "answer": "¿Cuál es su política de devoluciones?"
          },
          {
            "question": "What phrase do you use to ask if you can return an item that doesn't fit in Spanish?",
            "options": [
              "¿Puedo devolver esto si no me queda?",
              "¿Cuál es su política de devoluciones?",
              "¿Puedo tener un recibo, por favor?",
              "¿Cuánto cuesta esto?"
            ],
            "answer": "¿Puedo devolver esto si no me queda?"
          },
          {
            "question": "How do you ask where the payment area is in Spanish?",
            "options": [
              "¿Dónde está la caja?",
              "¿Puedo pagar con tarjeta?",
              "¿Aceptan efectivo?",
              "Me lo llevo."
            ],
            "answer": "¿Dónde está la caja?"
          },
          {
            "question": "What phrase do you use to ask if there are any available discounts in Spanish?",
            "options": [
              "¿Tienen descuentos?",
              "¿Está en oferta?",
              "¿Cuánto cuesta esto?",
              "¿Cuál es el precio de [Artículo]?"
            ],
            "answer": "¿Tienen descuentos?"
          },
          {
            "question": "How do you express your decision to buy an item in Spanish?",
            "options": [
              "Me lo llevo.",
              "Me gustaría comprar esto.",
              "¿Puedo pagar con tarjeta?",
              "¿Aceptan efectivo?"
            ],
            "answer": "Me lo llevo."
          },
          {
            "question": "What phrase do you use to ask if cash is an accepted payment method in Spanish?",
            "options": [
              "¿Aceptan efectivo?",
              "¿Puedo pagar con tarjeta?",
              "¿Dónde está la caja?",
              "Me lo llevo."
            ],
            "answer": "¿Aceptan efectivo?"
          },
          {
            "question": "How do you ask for a recommendation for a good product in Spanish?",
            "options": [
              "¿Puedes recomendar un buen [Producto]?",
              "¿Puedes ayudarme a encontrar [Artículo]?",
              "¿Dónde puedo encontrar [Artículo]?",
              "¿Tienes esto en otro tamaño/color?"
            ],
            "answer": "¿Puedes recomendar un buen [Producto]?"
          },
          {
            "question": "What phrase do you use to ask if there is room for negotiation on the price in Spanish?",
            "options": [
              "¿Puedo obtener un mejor precio?",
              "¿Está en oferta?",
              "¿Tienen descuentos?",
              "¿Cuánto cuesta esto?"
            ],
            "answer": "¿Puedo obtener un mejor precio?"
          },
          {
            "question": "How do you ask where an item is located in the store in Spanish?",
            "options": [
              "¿Dónde puedo encontrar [Artículo]?",
              "¿Puedes ayudarme a encontrar [Artículo]?",
              "¿Tienes esto en otro tamaño/color?",
              "¿Puedes recomendar un buen [Producto]?"
            ],
            "answer": "¿Dónde puedo encontrar [Artículo]?"
          },
          {
            "question": "What phrase do you use to indicate you are just browsing in Spanish?",
            "options": [
              "Estoy solo mirando.",
              "¿Cuánto cuesta esto?",
              "Me gustaría comprar esto.",
              "¿Dónde está la caja?"
            ],
            "answer": "Estoy solo mirando."
          },
          {
            "question": "How do you ask if an item comes with a guarantee in Spanish?",
            "options": [
              "¿Esto tiene garantía?",
              "¿Puedo tener un recibo, por favor?",
              "¿Cuál es su política de devoluciones?",
              "¿Puedo devolver esto si no me queda?"
            ],
            "answer": "¿Esto tiene garantía?"
          },
          {
            "question": "What phrase do you use to ask if the store delivers items in Spanish?",
            "options": [
              "¿Entregan?",
              "¿Puedo pagar con tarjeta?",
              "¿Aceptan efectivo?",
              "Me lo llevo."
            ],
            "answer": "¿Entregan?"
          },
          {
            "question": "How do you ask if there are any promotions or deals available for a product in Spanish?",
            "options": [
              "¿Hay alguna promoción o oferta disponible?",
              "¿Está en oferta?",
              "¿Tienen descuentos?",
              "¿Cuánto cuesta esto?"
            ],
            "answer": "¿Hay alguna promoción o oferta disponible?"
          }
        ]

      }
    }
  ]

  const opinions = [
    {
      topic: "Expressing Opinions",
      languages: {
        english: [
          {
            "question": "What is a common phrase to introduce your personal opinion in English?",
            "options": [
              "I think that...",
              "In my opinion, ...",
              "I believe that...",
              "From my perspective, ...",
              "It seems to me that..."
            ],
            "answer": "I think that..."
          },
          {
            "question": "How do you clearly state that what follows is your opinion in English?",
            "options": [
              "I think that...",
              "In my opinion, ...",
              "I believe that...",
              "From my perspective, ...",
              "It seems to me that..."
            ],
            "answer": "In my opinion, ..."
          },
          {
            "question": "What phrase do you use to express agreement with someone else's opinion in English?",
            "options": [
              "I agree with you.",
              "That's a good point.",
              "Exactly I was thinking the same thing.",
              "You're absolutely right.",
              "I couldn't agree more."
            ],
            "answer": "I agree with you."
          },
          {
            "question": "How do you strongly agree with someone's opinion in English?",
            "options": [
              "I agree with you.",
              "That's a good point.",
              "Exactly I was thinking the same thing.",
              "You're absolutely right.",
              "I couldn't agree more."
            ],
            "answer": "I couldn't agree more."
          },
          {
            "question": "What phrase do you use to politely disagree with someone's opinion in English?",
            "options": [
              "I see your point, but I disagree.",
              "I'm not sure I agree with that.",
              "That's an interesting perspective, however...",
              "I understand where you're coming from, but...",
              "I have a different view on this."
            ],
            "answer": "I see your point, but I disagree."
          },
          {
            "question": "How do you ask for someone's opinion on a particular topic in English?",
            "options": [
              "What do you think?",
              "How do you feel about that?",
              "Do you have any thoughts on this?",
              "What's your take on...?",
              "Could I get your opinion on...?"
            ],
            "answer": "What do you think?"
          },
          {
            "question": "What phrase do you use to express a different view on a topic in English?",
            "options": [
              "I see your point, but I disagree.",
              "I'm not sure I agree with that.",
              "That's an interesting perspective, however...",
              "I understand where you're coming from, but...",
              "I have a different view on this."
            ],
            "answer": "I have a different view on this."
          },
          {
            "question": "How do you acknowledge someone's point while still disagreeing in English?",
            "options": [
              "I see your point, but I disagree.",
              "I'm not sure I agree with that.",
              "That's an interesting perspective, however...",
              "I understand where you're coming from, but...",
              "I have a different view on this."
            ],
            "answer": "That's an interesting perspective, however..."
          },
          {
            "question": "What phrase do you use to show strong agreement and emphasize the point in English?",
            "options": [
              "You're absolutely right.",
              "Exactly I was thinking the same thing.",
              "I couldn't agree more.",
              "That's a good point.",
              "I agree with you."
            ],
            "answer": "You're absolutely right."
          },
          {
            "question": "How do you ask for someone's thoughts or feelings on a specific issue in English?",
            "options": [
              "What do you think?",
              "How do you feel about that?",
              "Do you have any thoughts on this?",
              "What's your take on...?",
              "Could I get your opinion on...?"
            ],
            "answer": "How do you feel about that?"
          },
          {
            "question": "What phrase do you use to express that you are not sure about agreeing with someone's opinion in English?",
            "options": [
              "I see your point, but I disagree.",
              "I'm not sure I agree with that.",
              "That's an interesting perspective, however...",
              "I understand where you're coming from, but...",
              "I have a different view on this."
            ],
            "answer": "I'm not sure I agree with that."
          },
          {
            "question": "How do you express that you have a similar thought or opinion in English?",
            "options": [
              "Exactly I was thinking the same thing.",
              "That's a good point.",
              "You're absolutely right.",
              "I couldn't agree more.",
              "I agree with you."
            ],
            "answer": "Exactly I was thinking the same thing."
          },
          {
            "question": "What phrase do you use to ask for someone's opinion in a more formal or polite way in English?",
            "options": [
              "What do you think?",
              "How do you feel about that?",
              "Do you have any thoughts on this?",
              "What's your take on...?",
              "Could I get your opinion on...?"
            ],
            "answer": "Could I get your opinion on...?"
          },
          {
            "question": "How do you acknowledge someone's perspective while still maintaining your disagreement in English?",
            "options": [
              "I see your point, but I disagree.",
              "I'm not sure I agree with that.",
              "That's an interesting perspective, however...",
              "I understand where you're coming from, but...",
              "I have a different view on this."
            ],
            "answer": "I understand where you're coming from, but..."
          },
          {
            "question": "What phrase do you use to show agreement and emphasize the validity of the point in English?",
            "options": [
              "That's a good point.",
              "You're absolutely right.",
              "I couldn't agree more.",
              "Exactly I was thinking the same thing.",
              "I agree with you."
            ],
            "answer": "That's a good point."
          },
          {
            "question": "How do you express a different opinion while still being respectful in English?",
            "options": [
              "I see your point, but I disagree.",
              "I'm not sure I agree with that.",
              "That's an interesting perspective, however...",
              "I understand where you're coming from, but...",
              "I have a different view on this."
            ],
            "answer": "That's an interesting perspective, however..."
          },
          {
            "question": "What phrase do you use to ask if someone has any thoughts or opinions on a particular topic in English?",
            "options": [
              "What do you think?",
              "How do you feel about that?",
              "Do you have any thoughts on this?",
              "What's your take on...?",
              "Could I get your opinion on...?"
            ],
            "answer": "Do you have any thoughts on this?"
          },
          {
            "question": "How do you express strong disagreement with someone's opinion in English?",
            "options": [
              "I see your point, but I disagree.",
              "I'm not sure I agree with that.",
              "That's an interesting perspective, however...",
              "I understand where you're coming from, but...",
              "I have a different view on this."
            ],
            "answer": "I'm not sure I agree with that."
          },
          {
            "question": "What phrase do you use to emphasize that you fully agree with someone's opinion in English?",
            "options": [
              "You're absolutely right.",
              "Exactly I was thinking the same thing.",
              "I couldn't agree more.",
              "That's a good point.",
              "I agree with you."
            ],
            "answer": "I couldn't agree more."
          }
        ],
        hausa: [
          {
            "question": "What is the meaning of 'Ina ganin cewa...' in English?",
            "options": [
              "I believe that...",
              "I think that...",
              "In my opinion, ...",
              "I agree with you."
            ],
            "answer": "I think that..."
          },
          {
            "question": "Which phrase in Hausa is used to express agreement with someone's opinion?",
            "options": [
              "Na yarda da kai.",
              "Kwarai da gaske Nima wannan ne ra'ayina.",
              "Ina ganin cewa...",
              "A ra'ayina, ..."
            ],
            "answer": "Na yarda da kai."
          },
          {
            "question": "What is the meaning of 'A ra'ayina, ...' in English?",
            "options": [
              "I believe that...",
              "In my opinion, ...",
              "I think that...",
              "I agree with you."
            ],
            "answer": "In my opinion, ..."
          },
          {
            "question": "How would you say 'I disagree' in Hausa?",
            "options": [
              "Na yarda da kai.",
              "Ban yarda ba.",
              "Ina ganin cewa...",
              "A ra'ayina, ..."
            ],
            "answer": "Ban yarda ba."
          },
          {
            "question": "What is the meaning of 'Kwarai da gaske Nima wannan ne ra'ayina.' in English?",
            "options": [
              "Exactly I was thinking the same thing.",
              "I understand where you're coming from, but I disagree.",
              "I agree with you.",
              "What do you think?"
            ],
            "answer": "Exactly I was thinking the same thing."
          },
          {
            "question": "How would you ask 'What do you think?' in Hausa?",
            "options": [
              "Me kake tunani?",
              "Ya kake ji game da wannan?",
              "Ina ganin cewa...",
              "A ra'ayina, ..."
            ],
            "answer": "Me kake tunani?"
          },
          {
            "question": "What is the meaning of 'Ina gaskata cewa...' in English?",
            "options": [
              "I believe that...",
              "I think that...",
              "In my opinion, ...",
              "I agree with you."
            ],
            "answer": "I believe that..."
          },
          {
            "question": "Which phrase in Hausa is used to express that you understand someone's point but disagree?",
            "options": [
              "Na fahimci inda kake, amma ban yarda ba.",
              "Na yarda da kai.",
              "Kwarai da gaske Nima wannan ne ra'ayina.",
              "Ina ganin cewa..."
            ],
            "answer": "Na fahimci inda kake, amma ban yarda ba."
          },
          {
            "question": "What is the meaning of 'Ya kake ji game da wannan?' in English?",
            "options": [
              "How do you feel about that?",
              "What do you think?",
              "I agree with you.",
              "I understand where you're coming from, but I disagree."
            ],
            "answer": "How do you feel about that?"
          },
          {
            "question": "How would you say 'In my opinion' in Hausa?",
            "options": [
              "Ina ganin cewa...",
              "A ra'ayina, ...",
              "Na yarda da kai.",
              "Ban yarda ba."
            ],
            "answer": "A ra'ayina, ..."
          },
          {
            "question": "What is the meaning of 'Na yarda da kai.' in English?",
            "options": [
              "I agree with you.",
              "I understand where you're coming from, but I disagree.",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "I agree with you."
          },
          {
            "question": "Which phrase in Hausa is used to express disagreement?",
            "options": [
              "Ban yarda ba.",
              "Na yarda da kai.",
              "Kwarai da gaske Nima wannan ne ra'ayina.",
              "Ina ganin cewa..."
            ],
            "answer": "Ban yarda ba."
          },
          {
            "question": "What is the meaning of 'Ina ganin' in English?",
            "options": [
              "I think",
              "I believe",
              "In my opinion",
              "I agree with you"
            ],
            "answer": "I think"
          },
          {
            "question": "How would you say 'I understand where you're coming from, but I disagree' in Hausa?",
            "options": [
              "Na fahimci inda kake, amma ban yarda ba.",
              "Na yarda da kai.",
              "Kwarai da gaske Nima wannan ne ra'ayina.",
              "Ina ganin cewa..."
            ],
            "answer": "Na fahimci inda kake, amma ban yarda ba."
          },
          {
            "question": "What is the meaning of 'A ra'ayina' in English?",
            "options": [
              "In my opinion",
              "I think",
              "I believe",
              "I agree with you"
            ],
            "answer": "In my opinion"
          },
          {
            "question": "Which phrase in Hausa is used to ask for someone's opinion?",
            "options": [
              "Me kake tunani?",
              "Ya kake ji game da wannan?",
              "Ina ganin cewa...",
              "A ra'ayina, ..."
            ],
            "answer": "Me kake tunani?"
          },
          {
            "question": "What is the meaning of 'Ban yarda ba' in English?",
            "options": [
              "I disagree",
              "I agree with you",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "I disagree"
          },
          {
            "question": "How would you say 'Exactly I was thinking the same thing' in Hausa?",
            "options": [
              "Kwarai da gaske Nima wannan ne ra'ayina.",
              "Na yarda da kai.",
              "Ina ganin cewa...",
              "A ra'ayina, ..."
            ],
            "answer": "Kwarai da gaske Nima wannan ne ra'ayina."
          },
          {
            "question": "What is the meaning of 'Ina gaskata' in English?",
            "options": [
              "I believe",
              "I think",
              "In my opinion",
              "I agree with you"
            ],
            "answer": "I believe"
          },
          {
            "question": "Which phrase in Hausa is used to express that you believe something?",
            "options": [
              "Ina gaskata cewa...",
              "Ina ganin cewa...",
              "A ra'ayina, ...",
              "Na yarda da kai."
            ],
            "answer": "Ina gaskata cewa..."
          },
          {
            "question": "What is the meaning of 'Na fahimci inda kake' in English?",
            "options": [
              "I understand where you're coming from",
              "I agree with you",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "I understand where you're coming from"
          },
          {
            "question": "How would you say 'I understand where you're coming from' in Hausa?",
            "options": [
              "Na fahimci inda kake",
              "Na yarda da kai.",
              "Kwarai da gaske Nima wannan ne ra'ayina.",
              "Ina ganin cewa..."
            ],
            "answer": "Na fahimci inda kake"
          }
        ],
        french: [
          {
            "question": "What is the meaning of 'Je pense que...' in English?",
            "options": [
              "I believe that...",
              "I think that...",
              "In my opinion, ...",
              "I agree with you."
            ],
            "answer": "I think that..."
          },
          {
            "question": "How would you say 'In my opinion' in French?",
            "options": [
              "Je pense que...",
              "À mon avis, ...",
              "Je crois que...",
              "Je suis d'accord avec vous."
            ],
            "answer": "À mon avis, ..."
          },
          {
            "question": "What is the meaning of 'Je suis d'accord avec vous' in English?",
            "options": [
              "I disagree with you.",
              "I agree with you.",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "I agree with you."
          },
          {
            "question": "How would you express disagreement in French?",
            "options": [
              "Je vois ce que vous voulez dire, mais je ne suis pas d'accord.",
              "Je suis d'accord avec vous.",
              "Je pense que...",
              "À mon avis, ..."
            ],
            "answer": "Je vois ce que vous voulez dire, mais je ne suis pas d'accord."
          },
          {
            "question": "What is the meaning of 'Je crois que...' in English?",
            "options": [
              "I believe that...",
              "I think that...",
              "In my opinion, ...",
              "I agree with you."
            ],
            "answer": "I believe that..."
          },
          {
            "question": "How would you ask 'What do you think?' in French?",
            "options": [
              "Que pensez-vous?",
              "Qu'en pensez-vous?",
              "Je pense que...",
              "À mon avis, ..."
            ],
            "answer": "Que pensez-vous?"
          },
          {
            "question": "What is the meaning of 'Je ne suis pas d'accord' in English?",
            "options": [
              "I agree with you.",
              "I disagree with you.",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "I disagree with you."
          },
          {
            "question": "How would you say 'That's a good point' in French?",
            "options": [
              "C'est un bon point.",
              "Je suis d'accord avec vous.",
              "Je pense que...",
              "À mon avis, ..."
            ],
            "answer": "C'est un bon point."
          },
          {
            "question": "What is the meaning of 'Qu'en pensez-vous?' in English?",
            "options": [
              "What do you think?",
              "What's your take on this?",
              "I agree with you.",
              "I think that..."
            ],
            "answer": "What's your take on this?"
          },
          {
            "question": "How would you express 'Personally, I think that...' in French?",
            "options": [
              "Je pense que...",
              "À mon avis, ...",
              "Personnellement, je pense que...",
              "Je crois que..."
            ],
            "answer": "Personnellement, je pense que..."
          },
          {
            "question": "What is the meaning of 'Selon moi' in English?",
            "options": [
              "In my opinion",
              "I think",
              "I believe",
              "I agree with you"
            ],
            "answer": "In my opinion"
          },
          {
            "question": "How would you say 'It seems to me that...' in French?",
            "options": [
              "Il me semble que...",
              "Je pense que...",
              "À mon avis, ...",
              "Je crois que..."
            ],
            "answer": "Il me semble que..."
          },
          {
            "question": "What is the meaning of 'D'après moi' in English?",
            "options": [
              "In my view",
              "I think",
              "I believe",
              "I agree with you"
            ],
            "answer": "In my view"
          },
          {
            "question": "How would you express 'I have the impression that...' in French?",
            "options": [
              "J'ai l'impression que...",
              "Je pense que...",
              "À mon avis, ...",
              "Je crois que..."
            ],
            "answer": "J'ai l'impression que..."
          },
          {
            "question": "What is the meaning of 'Je doute que' in English?",
            "options": [
              "I doubt that",
              "I think that",
              "In my opinion, ...",
              "I agree with you"
            ],
            "answer": "I doubt that"
          },
          {
            "question": "How would you say 'It's possible that...' in French?",
            "options": [
              "Il est possible que...",
              "Je pense que...",
              "À mon avis, ...",
              "Je crois que..."
            ],
            "answer": "Il est possible que..."
          },
          {
            "question": "What is the meaning of 'Je comprends ton point de vue, mais...' in English?",
            "options": [
              "I understand your point of view, but...",
              "I agree with you.",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "I understand your point of view, but..."
          },
          {
            "question": "How would you express 'I see things differently' in French?",
            "options": [
              "Je vois les choses différemment.",
              "Je suis d'accord avec vous.",
              "Je pense que...",
              "À mon avis, ..."
            ],
            "answer": "Je vois les choses différemment."
          },
          {
            "question": "What is the meaning of 'C'est une question complexe' in English?",
            "options": [
              "It's a complex issue",
              "I agree with you.",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "It's a complex issue"
          },
          {
            "question": "How would you say 'There are advantages and disadvantages' in French?",
            "options": [
              "Il y a des avantages et des inconvénients.",
              "Je suis d'accord avec vous.",
              "Je pense que...",
              "À mon avis, ..."
            ],
            "answer": "Il y a des avantages et des inconvénients."
          },
          {
            "question": "What is the meaning of 'En fait, c’est impossible' in English?",
            "options": [
              "Actually, it’s impossible",
              "I agree with you.",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "Actually, it’s impossible"
          },
          {
            "question": "How would you express 'Let’s agree to disagree' in French?",
            "options": [
              "En restons là.",
              "Je suis d'accord avec vous.",
              "Je pense que...",
              "À mon avis, ..."
            ],
            "answer": "En restons là."
          }
        ],
        spanish: [
          {
            "question": "What is the meaning of 'Creo que...' in English?",
            "options": [
              "I believe that...",
              "I think that...",
              "In my opinion, ...",
              "I agree with you."
            ],
            "answer": "I think that..."
          },
          {
            "question": "How would you say 'In my opinion' in Spanish?",
            "options": [
              "Creo que...",
              "En mi opinión, ...",
              "Pienso que...",
              "Estoy de acuerdo contigo."
            ],
            "answer": "En mi opinión, ..."
          },
          {
            "question": "What is the meaning of 'Estoy de acuerdo contigo' in English?",
            "options": [
              "I disagree with you.",
              "I agree with you.",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "I agree with you."
          },
          {
            "question": "How would you express disagreement in Spanish?",
            "options": [
              "Entiendo tu punto, pero no estoy de acuerdo.",
              "Estoy de acuerdo contigo.",
              "Creo que...",
              "En mi opinión, ..."
            ],
            "answer": "Entiendo tu punto, pero no estoy de acuerdo."
          },
          {
            "question": "What is the meaning of 'Pienso que...' in English?",
            "options": [
              "I believe that...",
              "I think that...",
              "In my opinion, ...",
              "I agree with you."
            ],
            "answer": "I think that..."
          },
          {
            "question": "How would you ask 'What do you think?' in Spanish?",
            "options": [
              "¿Qué piensas?",
              "¿Cuál es tu opinión sobre...?",
              "Creo que...",
              "En mi opinión, ..."
            ],
            "answer": "¿Qué piensas?"
          },
          {
            "question": "What is the meaning of 'No estoy de acuerdo' in English?",
            "options": [
              "I agree with you.",
              "I disagree with you.",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "I disagree with you."
          },
          {
            "question": "How would you say 'Exactly I was thinking the same thing' in Spanish?",
            "options": [
              "Exactamente Pensaba lo mismo.",
              "Estoy de acuerdo contigo.",
              "Creo que...",
              "En mi opinión, ..."
            ],
            "answer": "Exactamente Pensaba lo mismo."
          },
          {
            "question": "What is the meaning of '¿Cuál es tu opinión sobre...?' in English?",
            "options": [
              "What do you think?",
              "What's your take on...?",
              "I agree with you.",
              "I think that..."
            ],
            "answer": "What's your take on...?"
          },
          {
            "question": "How would you introduce your opinion with 'In my opinion' in Spanish?",
            "options": [
              "Creo que...",
              "Pienso que...",
              "En mi opinión, ...",
              "Estoy de acuerdo contigo."
            ],
            "answer": "En mi opinión, ..."
          },
          {
            "question": "What is the meaning of 'Me parece que...' in English?",
            "options": [
              "It seems to me that...",
              "I think that...",
              "In my opinion, ...",
              "I agree with you."
            ],
            "answer": "It seems to me that..."
          },
          {
            "question": "How would you express 'I understand your point, but I disagree' in Spanish?",
            "options": [
              "Entiendo tu punto, pero no estoy de acuerdo.",
              "Estoy de acuerdo contigo.",
              "Creo que...",
              "En mi opinión, ..."
            ],
            "answer": "Entiendo tu punto, pero no estoy de acuerdo."
          },
          {
            "question": "What is the meaning of 'A mi juicio' in English?",
            "options": [
              "In my judgment",
              "I think",
              "I believe",
              "I agree with you"
            ],
            "answer": "In my judgment"
          },
          {
            "question": "How would you say 'It is obvious that...' in Spanish?",
            "options": [
              "Es evidente que...",
              "Creo que...",
              "En mi opinión, ...",
              "Estoy de acuerdo contigo."
            ],
            "answer": "Es evidente que..."
          },
          {
            "question": "What is the meaning of 'Para mí' in English?",
            "options": [
              "For me",
              "I think",
              "I believe",
              "I agree with you"
            ],
            "answer": "For me"
          },
          {
            "question": "How would you express 'I am convinced that...' in Spanish?",
            "options": [
              "Estoy convencido(a) de que...",
              "Creo que...",
              "En mi opinión, ...",
              "Estoy de acuerdo contigo."
            ],
            "answer": "Estoy convencido(a) de que..."
          },
          {
            "question": "What is the meaning of 'Se me hace que...' in English?",
            "options": [
              "It seems to me that...",
              "I think that...",
              "In my opinion, ...",
              "I agree with you"
            ],
            "answer": "It seems to me that..."
          },
          {
            "question": "How would you ask for someone's opinion using 'What do you think about...?' in Spanish?",
            "options": [
              "¿Qué piensas sobre...?",
              "¿Cuál es tu opinión sobre...?",
              "Creo que...",
              "En mi opinión, ..."
            ],
            "answer": "¿Qué piensas sobre...?"
          },
          {
            "question": "What is the meaning of 'No creo que sea así' in English?",
            "options": [
              "I don’t think that’s the case",
              "I agree with you",
              "I think that...",
              "In my opinion, ..."
            ],
            "answer": "I don’t think that’s the case"
          },
          {
            "question": "How would you express 'I'm not sure that...' in Spanish?",
            "options": [
              "No estoy seguro/a de que...",
              "Creo que...",
              "En mi opinión, ...",
              "Estoy de acuerdo contigo."
            ],
            "answer": "No estoy seguro/a de que..."
          },
          {
            "question": "What is the meaning of 'Desde mi punto de vista' in English?",
            "options": [
              "From my point of view",
              "I think",
              "I believe",
              "I agree with you"
            ],
            "answer": "From my point of view"
          }
        ]
      }
    }
  ]

  const idioms = [
    {
      topic: "Simple idioms",
      languages: {
        english: [
          {
            "question": "What does the idiom 'A penny for your thoughts' mean in English?",
            "options": [
              "A way of asking what someone is thinking",
              "A way of saying someone is rich",
              "A way of asking for money",
              "A way of saying someone is quiet"
            ],
            "answer": "A way of asking what someone is thinking"
          },
          {
            "question": "What does the idiom 'Bite the bullet' mean in English?",
            "options": [
              "To face a difficult or unpleasant situation with courage",
              "To avoid a difficult or unpleasant situation",
              "To take a risk without thinking",
              "To give up on a task"
            ],
            "answer": "To face a difficult or unpleasant situation with courage"
          },
          {
            "question": "What does the idiom 'Break the ice' mean in English?",
            "options": [
              "To initiate a conversation in a social setting",
              "To end a conversation abruptly",
              "To make someone feel uncomfortable",
              "To avoid talking to someone"
            ],
            "answer": "To initiate a conversation in a social setting"
          },
          {
            "question": "What does the idiom 'Hit the nail on the head' mean in English?",
            "options": [
              "To be exactly right about something",
              "To be completely wrong about something",
              "To avoid talking about something",
              "To change the subject"
            ],
            "answer": "To be exactly right about something"
          },
          {
            "question": "What does the wise saying 'Actions speak louder than words' mean in English?",
            "options": [
              "What you do is more important than what you say",
              "What you say is more important than what you do",
              "Actions and words are equally important",
              "Neither actions nor words are important"
            ],
            "answer": "What you do is more important than what you say"
          },
          {
            "question": "What does the wise saying 'A picture is worth a thousand words' mean in English?",
            "options": [
              "An image can convey more information than a description",
              "A description can convey more information than an image",
              "Images and descriptions are equally informative",
              "Neither images nor descriptions are informative"
            ],
            "answer": "An image can convey more information than a description"
          },
          {
            "question": "What does the wise saying 'The early bird catches the worm' mean in English?",
            "options": [
              "The person who takes the earliest opportunity to do something will have an advantage",
              "The person who takes the latest opportunity to do something will have an advantage",
              "Opportunities are available at any time",
              "Opportunities are not important"
            ],
            "answer": "The person who takes the earliest opportunity to do something will have an advantage"
          },
          {
            "question": "What is the definition of an idiom in English?",
            "options": [
              "A commonly used expression with a meaning different from the literal words",
              "A phrase that offers wisdom or life advice",
              "A word with a single meaning",
              "A sentence with a literal meaning"
            ],
            "answer": "A commonly used expression with a meaning different from the literal words"
          },
          {
            "question": "What is the definition of a wise saying in English?",
            "options": [
              "A phrase that offers wisdom or life advice",
              "A phrase with a literal meaning",
              "A word with a single meaning",
              "A sentence with no meaning"
            ],
            "answer": "A phrase that offers wisdom or life advice"
          },
          {
            "question": "How do you use the idiom 'Bite the bullet' in a sentence?",
            "options": [
              "I had to bite the bullet and face my fear of public speaking.",
              "I decided to avoid the situation and not bite the bullet.",
              "Biting the bullet is always easy.",
              "Biting the bullet is never necessary."
            ],
            "answer": "I had to bite the bullet and face my fear of public speaking."
          },
          {
            "question": "What is another way to express the idea behind 'Actions speak louder than words'?",
            "options": [
              "It's not what you say, it's what you do that matters.",
              "It's not what you do, it's what you say that matters.",
              "Both actions and words are equally important.",
              "Neither actions nor words are important."
            ],
            "answer": "It's not what you say, it's what you do that matters."
          },
          {
            "question": "How does the wise saying 'A picture is worth a thousand words' relate to communication?",
            "options": [
              "It suggests that images are more effective than text in conveying information.",
              "It suggests that text is more effective than images in conveying information.",
              "It suggests that images and text are equally effective.",
              "It suggests that neither images nor text are effective."
            ],
            "answer": "It suggests that images are more effective than text in conveying information."
          },
          {
            "question": "What is the implication of the wise saying 'The early bird catches the worm'?",
            "options": [
              "Taking early action gives you an advantage.",
              "Taking late action gives you an advantage.",
              "Timing does not matter.",
              "Opportunities are scarce."
            ],
            "answer": "Taking early action gives you an advantage."
          },
          {
            "question": "How do you use the idiom 'Break the ice' in a social setting?",
            "options": [
              "To make someone feel uncomfortable.",
              "To end a conversation abruptly.",
              "To initiate a conversation and make people feel more comfortable.",
              "To avoid talking to someone."
            ],
            "answer": "To initiate a conversation and make people feel more comfortable."
          },
          {
            "question": "What does 'Hit the nail on the head' imply about someone's statement or action?",
            "options": [
              "It is completely accurate or correct.",
              "It is completely inaccurate or incorrect.",
              "It is partially accurate or correct.",
              "It is irrelevant."
            ],
            "answer": "It is completely accurate or correct."
          },
          {
            "question": "Can you provide an example of how to use the wise saying 'Actions speak louder than words' in context?",
            "options": [
              "He promised to help but never showed up; actions speak louder than words.",
              "He said he would help and he actually did; actions speak louder than words.",
              "He talked a lot but did nothing; actions are not important.",
              "He talked a lot and did a lot; both are important."
            ],
            "answer": "He promised to help but never showed up; actions speak louder than words."
          },
          {
            "question": "How does the idiom 'A penny for your thoughts' reflect curiosity about someone's thoughts?",
            "options": [
              "It shows indifference to someone's thoughts.",
              "It shows curiosity about someone's thoughts.",
              "It shows annoyance at someone's thoughts.",
              "It shows confusion about someone's thoughts."
            ],
            "answer": "It shows curiosity about someone's thoughts."
          }
        ],
        hausa: [
          {
            "question": "What is the meaning of the Hausa proverb 'Aikin gama ya gama'?",
            "options": [
              "Starting a task well sets the stage for a successful completion",
              "Every bird has its own flock",
              "Water doesn't turn bitter for no reason",
              "The fortunate one never tires"
            ],
            "answer": "Starting a task well sets the stage for a successful completion"
          },
          {
            "question": "How would you translate the Hausa proverb 'Kowane tsuntsu da kiwonsa' into English?",
            "options": [
              "Every bird has its own flock",
              "Water doesn't turn bitter for no reason",
              "The fortunate one never tires",
              "Starting a task well sets the stage for a successful completion"
            ],
            "answer": "Every bird has its own flock"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'Ruwa baya tsami banza'?",
            "options": [
              "There's always a reason for a change in behavior",
              "The fortunate one never tires",
              "Every bird has its own flock",
              "Starting a task well sets the stage for a successful completion"
            ],
            "answer": "There's always a reason for a change in behavior"
          },
          {
            "question": "How would you translate the Hausa proverb 'Mai rabo baya gajiya' into English?",
            "options": [
              "Those with good fortune never give up",
              "Every bird has its own flock",
              "Water doesn't turn bitter for no reason",
              "Starting a task well sets the stage for a successful completion"
            ],
            "answer": "Those with good fortune never give up"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'Kowa yayi hakuri zai samu riba'?",
            "options": [
              "Anyone who is patient will profit",
              "Good things come to those who wait",
              "Every bird has its own flock",
              "Starting a task well sets the stage for a successful completion"
            ],
            "answer": "Anyone who is patient will profit"
          },
          {
            "question": "How would you translate the Hausa proverb 'Tsare gaskiya ko da wuta aka saka ka' into English?",
            "options": [
              "Keep to the truth even if they put you in the fire",
              "Embrace the truth even when it’s hard",
              "Good things come to those who wait",
              "Every bird has its own flock"
            ],
            "answer": "Keep to the truth even if they put you in the fire"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'In za ka gina ramin mugunta gina shi gajere'?",
            "options": [
              "Be careful when you scheme against others because you just might rope yourself in",
              "Experience is the best teacher",
              "Good things come to those who wait",
              "Every bird has its own flock"
            ],
            "answer": "Be careful when you scheme against others because you just might rope yourself in"
          },
          {
            "question": "How would you translate the Hausa proverb 'Hannu daya baya daukan jinka' into English?",
            "options": [
              "One hand cannot lift a hut",
              "Teamwork makes the dream work",
              "Good things come to those who wait",
              "Every bird has its own flock"
            ],
            "answer": "One hand cannot lift a hut"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'Ko ba’a gwaada ba, gatari ya san dutse'?",
            "options": [
              "Experience is the greatest teacher",
              "Teamwork makes the dream work",
              "Good things come to those who wait",
              "Every bird has its own flock"
            ],
            "answer": "Experience is the greatest teacher"
          },
          {
            "question": "How would you translate the Hausa proverb 'Kworria ta bi kworria, en ta bi akoshi sai ta mutu' into English?",
            "options": [
              "The calabash follows the calabash. When it follows the wooden basin, it gets broken",
              "Experience is the best teacher",
              "Teamwork makes the dream work",
              "Good things come to those who wait"
            ],
            "answer": "The calabash follows the calabash. When it follows the wooden basin, it gets broken"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'Komai yayi farko zai yi karshe'?",
            "options": [
              "Everything that has a beginning has an end",
              "No condition is permanent",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "Everything that has a beginning has an end"
          },
          {
            "question": "How would you translate the Hausa proverb 'Dukawa’n wada ba shi hanna ka tasshi da tsawonka' into English?",
            "options": [
              "Saluting a dwarf by bowing will not prevent you from rising to your full height again",
              "Aspire to always do the right thing",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "Saluting a dwarf by bowing will not prevent you from rising to your full height again"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'Rama ba mutua ba'?",
            "options": [
              "Being thin is not dying",
              "Don’t judge by appearance",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "Being thin is not dying"
          },
          {
            "question": "How would you translate the Hausa proverb 'Mai tambaya ba shi bata, sai dei asheerinsa ka tonoa' into English?",
            "options": [
              "He who asks does not go wrong, but his secret is dug up",
              "Be cautious when asking for and receiving help",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "He who asks does not go wrong, but his secret is dug up"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'Madaki shi ya san enda rua ke zubar mashi'?",
            "options": [
              "The owner of the house knows from where the water drips on him",
              "No one knows your reality better than you do",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "The owner of the house knows from where the water drips on him"
          },
          {
            "question": "How would you translate the Hausa proverb 'Gishiri nema (na yi ma) mai’n kadde daria’n rana, randa rua ya zo gishiri ya ji kumia' into English?",
            "options": [
              "Salt laughs at shea butter while the sun shines, but when the rain comes, it hides its head",
              "Last last, na everybody go chop breakfast",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "Salt laughs at shea butter while the sun shines, but when the rain comes, it hides its head"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'Woni tsuntsu ya ke gudu rua, awuagwa rua ta ke nema'?",
            "options": [
              "Some birds avoid water. The duck searches for it",
              "We don’t all have to like the same things",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "Some birds avoid water. The duck searches for it"
          },
          {
            "question": "How would you translate the Hausa proverb 'Mutum ba shi soka’n chikkinshi, saanan shi komo shi yi kirari' into English?",
            "options": [
              "A man does not stick a knife into his stomach and boast about it",
              "Don’t toot your horn after doing wrong",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "A man does not stick a knife into his stomach and boast about it"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'A buggi karfe da saura’n zafi, in ya fuche sai a wahalla'?",
            "options": [
              "Strike while the iron is hot, you will suffer if you allow it to get cold",
              "Do not lose an opportunity when it is ripe",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "Strike while the iron is hot, you will suffer if you allow it to get cold"
          },
          {
            "question": "How would you translate the Hausa proverb 'A yi, a gamma, ta fi takamma, gobe a koma' into English?",
            "options": [
              "To do, to finish, is better than ‘don’t care, come back tomorrow’",
              "Never put off till tomorrow what you can do today",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "To do, to finish, is better than ‘don’t care, come back tomorrow’"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'Ganni ya fi ji'?",
            "options": [
              "Seeing is better than hearing",
              "To be able to say that you have seen a thing with your own eyes is better than only to know by hearsay",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "Seeing is better than hearing"
          },
          {
            "question": "How would you translate the Hausa proverb 'Hakki da ka rena shi kan soni maka ido' into English?",
            "options": [
              "The grass which you disregard will injure your eye",
              "Don’t forget to take all precautions",
              "No man or thing is too insignificant to be altogether disregarded",
              "Experience is the best teacher"
            ],
            "answer": "The grass which you disregard will injure your eye"
          },
          {
            "question": "What is the meaning of the Hausa proverb 'Yawa shi kan sa zarre ya ja duchi'?",
            "options": [
              "Quantity makes the cotton draw a stone",
              "Unity is strength",
              "Experience is the best teacher",
              "Teamwork makes the dream work"
            ],
            "answer": "Quantity makes the cotton draw a stone"
          }
        ],
        french: [
          {
            "question": "What is the meaning of the French idiom 'Avoir le cafard'?",
            "options": [
              "To feel happy and excited",
              "To feel sad or depressed",
              "To feel hungry",
              "To feel tired"
            ],
            "answer": "To feel sad or depressed"
          },
          {
            "question": "How would you translate the French idiom 'Donner sa langue au chat' into English?",
            "options": [
              "Give one's tongue to the cat",
              "Give up trying to guess something",
              "Start a new project",
              "Feel very confident"
            ],
            "answer": "Give up trying to guess something"
          },
          {
            "question": "What is the meaning of the French proverb 'L'habit ne fait pas le moine'?",
            "options": [
              "Appearances can be deceiving",
              "The clothes make the man",
              "Happiness comes from within",
              "Money is the root of all evil"
            ],
            "answer": "Appearances can be deceiving"
          },
          {
            "question": "How would you translate the French proverb 'Petit à petit, l'oiseau fait son nid' into English?",
            "options": [
              "Little by little, the bird builds its nest",
              "Haste makes waste",
              "Slow and steady wins the race",
              "All at once, the bird builds its nest"
            ],
            "answer": "Little by little, the bird builds its nest"
          },
          {
            "question": "What is the meaning of the French proverb 'Qui se ressemble s’assemble'?",
            "options": [
              "Birds of a feather flock together",
              "Opposites attract",
              "Friends are made through shared interests",
              "Enemies become friends over time"
            ],
            "answer": "Birds of a feather flock together"
          },
          {
            "question": "How would you translate the French proverb 'Il ne faut pas se fier aux apparences' into English?",
            "options": [
              "You must trust appearances",
              "You must not trust appearances",
              "Appearances are everything",
              "Honesty is the best policy"
            ],
            "answer": "You must not trust appearances"
          },
          {
            "question": "What is the meaning of the French proverb 'Chat échaudé craint l’eau froide'?",
            "options": [
              "Once bitten, twice shy",
              "Once you've been hurt, you'll be cautious",
              "Cats fear cold water",
              "Dogs are afraid of baths"
            ],
            "answer": "Once bitten, twice shy"
          },
          {
            "question": "How would you translate the French proverb 'Un point à temps en vaut cent' into English?",
            "options": [
              "A stitch in time saves nine",
              "A stitch in time is worth a hundred",
              "Early action is better than late action",
              "Planning is key to success"
            ],
            "answer": "A stitch in time saves nine"
          },
          {
            "question": "What is the meaning of the French proverb 'Les petits ruisseaux font les grandes rivières'?",
            "options": [
              "Take care of the pennies and the pounds will take care of themselves",
              "Great oaks from little acorns grow",
              "Little streams make big rivers",
              "Big rivers start from small streams"
            ],
            "answer": "Little streams make big rivers"
          },
          {
            "question": "How would you translate the French proverb 'Au besoin on connaît l’ami' into English?",
            "options": [
              "A friend in need is a friend indeed",
              "A friend in need is not a true friend",
              "In times of need, you know your enemies",
              "In times of need, you know your family"
            ],
            "answer": "A friend in need is a friend indeed"
          },
          {
            "question": "What is the meaning of the French proverb 'Tomber de mal en pis'?",
            "options": [
              "To go from bad to worse",
              "To go from good to better",
              "To stay the same",
              "To improve slightly"
            ],
            "answer": "To go from bad to worse"
          },
          {
            "question": "How would you translate the French proverb 'L’argent attire l’argent' into English?",
            "options": [
              "Money makes money",
              "Money doesn’t grow on trees",
              "Money can’t buy happiness",
              "Money is the root of all evil"
            ],
            "answer": "Money makes money"
          },
          {
            "question": "What is the meaning of the French proverb 'Rira bien qui rira le dernier'?",
            "options": [
              "He who laughs last laughs longest",
              "He who laughs first laughs loudest",
              "Laughter is the best medicine",
              "Silence is golden"
            ],
            "answer": "He who laughs last laughs longest"
          },
          {
            "question": "How would you translate the French proverb 'Une minute d’hésitation peut coûter cher' into English?",
            "options": [
              "He who hesitates is lost",
              "He who hesitates is wise",
              "A minute of hesitation can be costly",
              "Delay can be beneficial"
            ],
            "answer": "He who hesitates is lost"
          },
          {
            "question": "What is the meaning of the French proverb 'Il n’y a pas plus sourd que celui qui ne veut pas entendre'?",
            "options": [
              "The deafest are those who don’t want to listen",
              "The deafest are those who can’t hear",
              "Those who don’t want to listen are wise",
              "Those who can’t hear are deaf"
            ],
            "answer": "The deafest are those who don’t want to listen"
          },
          {
            "question": "How would you translate the French proverb 'Qui court deux lièvres à la fois, n’en prend aucun' into English?",
            "options": [
              "Who chases two hares simultaneously, catches neither",
              "Who chases two hares simultaneously, catches both",
              "Too many irons in the fire",
              "Focus on one task at a time"
            ],
            "answer": "Who chases two hares simultaneously, catches neither"
          },
          {
            "question": "What is the meaning of the French proverb 'L’argent est le roi'?",
            "options": [
              "Money talks",
              "Money is the root of all evil",
              "Money can’t buy happiness",
              "Money is not everything"
            ],
            "answer": "Money talks"
          },
          {
            "question": "How would you translate the French proverb 'Chaque chose en son temps' into English?",
            "options": [
              "Each thing in its own time",
              "Don’t cross your bridges before you come to them",
              "Do things at the right time",
              "Time is of the essence"
            ],
            "answer": "Each thing in its own time"
          },
          {
            "question": "What is the meaning of the French proverb 'Un tiens vaut mieux que deux tu l’auras'?",
            "options": [
              "A bird in the hand is worth two in the bush",
              "Two birds in the bush are better than one in the hand",
              "A bird in the hand is worth nothing",
              "Two birds in the bush are worthless"
            ],
            "answer": "A bird in the hand is worth two in the bush"
          },
          {
            "question": "How would you translate the French proverb 'Tout ce qui brille n’est pas or' into English?",
            "options": [
              "All that glitters is not gold",
              "All that glitters is gold",
              "Gold is valuable",
              "Appearance is everything"
            ],
            "answer": "All that glitters is not gold"
          }
        ],
        spanish: [
          {
            "question": "What is the meaning of the Spanish idiom 'Estar en las nubes'?",
            "options": [
              "To be very focused",
              "To be daydreaming or not paying attention",
              "To be very easy",
              "To be in a good mood"
            ],
            "answer": "To be daydreaming or not paying attention"
          },
          {
            "question": "How would you translate the Spanish idiom 'Ser pan comido' into English?",
            "options": [
              "To be very difficult",
              "To be very easy",
              "To be daydreaming or not paying attention",
              "To be in a good mood"
            ],
            "answer": "To be very easy"
          },
          {
            "question": "What is the meaning of the Spanish wise saying 'Más vale tarde que nunca'?",
            "options": [
              "Better early than late",
              "Better late than never",
              "Early risers are more likely to succeed",
              "It’s better to do nothing at all"
            ],
            "answer": "Better late than never"
          },
          {
            "question": "How would you translate the Spanish wise saying 'A quien madruga, Dios le ayuda' into English?",
            "options": [
              "God helps those who are lazy",
              "God helps the early riser",
              "Early risers are less likely to succeed",
              "It’s better to sleep in"
            ],
            "answer": "God helps the early riser"
          },
          {
            "question": "What is the meaning of the Spanish idiom 'No importar un pepino / un rábano / un pimiento'?",
            "options": [
              "To be very important",
              "To be irrelevant",
              "To be very easy",
              "To be in a good mood"
            ],
            "answer": "To be irrelevant"
          },
          {
            "question": "How would you translate the Spanish idiom 'Verle las orejas al lobo' into English?",
            "options": [
              "To see the writing on the wall",
              "To notice danger",
              "To be very careful",
              "To be in a good mood"
            ],
            "answer": "To notice danger"
          },
          {
            "question": "What is the meaning of the Spanish idiom 'Tener memoria de pez'?",
            "options": [
              "To have an excellent memory",
              "To have a bad memory",
              "To be very easy",
              "To be daydreaming or not paying attention"
            ],
            "answer": "To have a bad memory"
          },
          {
            "question": "How would you translate the Spanish idiom 'Ponerse de mala leche' into English?",
            "options": [
              "To get in a good mood",
              "To get in a bad mood",
              "To be very easy",
              "To be daydreaming or not paying attention"
            ],
            "answer": "To get in a bad mood"
          },
          {
            "question": "What is the meaning of the Spanish wise saying 'Del dicho al hecho, hay mucho trecho'?",
            "options": [
              "From saying to fact, there is no difference",
              "From saying to fact, there is a significant difference",
              "Early risers are more likely to succeed",
              "It’s better to do nothing at all"
            ],
            "answer": "From saying to fact, there is a significant difference"
          },
          {
            "question": "How would you translate the Spanish idiom 'Meter la pata' into English?",
            "options": [
              "To make a mistake",
              "To do something perfectly",
              "To be very careful",
              "To be in a good mood"
            ],
            "answer": "To make a mistake"
          },
          {
            "question": "What is the meaning of the Spanish idiom 'No pegar ojo'?",
            "options": [
              "To sleep very well",
              "Not being able to sleep",
              "To be very easy",
              "To be daydreaming or not paying attention"
            ],
            "answer": "Not being able to sleep"
          },
          {
            "question": "How would you translate the Spanish idiom 'Sin pelos en la lengua' into English?",
            "options": [
              "To be very polite",
              "To be outspoken",
              "To be very careful",
              "To be in a good mood"
            ],
            "answer": "To be outspoken"
          },
          {
            "question": "What is the meaning of the Spanish idiom 'Estar hasta las narices'?",
            "options": [
              "To be very happy",
              "To be annoyed or tired of something",
              "To be very easy",
              "To be daydreaming or not paying attention"
            ],
            "answer": "To be annoyed or tired of something"
          },
          {
            "question": "How would you translate the Spanish wise saying 'Quien madruga, Dios le ayuda' into English and explain its meaning?",
            "options": [
              "God helps those who are lazy - It means that being lazy is beneficial.",
              "God helps the early riser - It means that early risers are more likely to succeed.",
              "God helps those who sleep in - It means that sleeping in is advantageous.",
              "God helps those who do nothing - It means that doing nothing is the best strategy."
            ],
            "answer": "God helps the early riser - It means that early risers are more likely to succeed."
          },
          {
            "question": "What is the meaning of the Spanish idiom 'Dar la vuelta a la tortilla'?",
            "options": [
              "To turn the situation around",
              "To make things worse",
              "To be very careful",
              "To be in a good mood"
            ],
            "answer": "To turn the situation around"
          },
          {
            "question": "How would you translate the Spanish idiom 'Ser del año de la pera' into English?",
            "options": [
              "To be very young",
              "To be very old",
              "To be very easy",
              "To be daydreaming or not paying attention"
            ],
            "answer": "To be very old"
          },
          {
            "question": "What is the meaning of the Spanish wise saying 'Caras vemos, corazones no sabemos'?",
            "options": [
              "We see faces but know hearts",
              "We see hearts but know faces",
              "We should judge people by their appearance",
              "We should not judge people by their appearance"
            ],
            "answer": "We should not judge people by their appearance"
          },
          {
            "question": "How would you translate the Spanish idiom 'Buscar tres pies al gato' into English?",
            "options": [
              "To make something more complicated than it is",
              "To make things easier",
              "To be very careful",
              "To be in a good mood"
            ],
            "answer": "To make something more complicated than it is"
          },
          {
            "question": "What is the meaning of the Spanish idiom 'Andar con pies de plomo'?",
            "options": [
              "To walk with caution",
              "To walk carelessly",
              "To be very easy",
              "To be daydreaming or not paying attention"
            ],
            "answer": "To walk with caution"
          },
          {
            "question": "How would you translate the Spanish wise saying 'Dios aprieta pero no ahorca' into English?",
            "options": [
              "God squeezes but does not choke",
              "God helps those who help themselves",
              "God punishes but does not forgive",
              "God forgives but does not punish"
            ],
            "answer": "God squeezes but does not choke"
          },
          {
            "question": "What is the meaning of the Spanish idiom 'Lavarse las manos'?",
            "options": [
              "To avoid your responsibility",
              "To take on more responsibility",
              "To be very careful",
              "To be in a good mood"
            ],
            "answer": "To avoid your responsibility"
          },
          {
            "question": "How would you translate the Spanish idiom 'Hacer algo al pie de la letra' into English?",
            "options": [
              "To do something exactly as instructed",
              "To do something randomly",
              "To be very careful",
              "To be in a good mood"
            ],
            "answer": "To do something exactly as instructed"
          }
        ]
      }
    }
  ]

  const directions = [
    {
      topic: "Asking for and Giving Directions",
      languages: {
        english: [
          {
            "question": "What is the most polite way to ask for directions when you are unsure about the location of a specific place?",
            "options": [
              "Excuse me, can you tell me how to get to [Place]?",
              "Where is the nearest [Landmark/Place]?",
              "How do I get to [Place] from here?",
              "Can you show me on the map?"
            ],
            "answer": "Excuse me, can you tell me how to get to [Place]?"
          },
          {
            "question": "If you are asking for the quickest route to a destination, which of the following phrases would be most appropriate?",
            "options": [
              "What is the quickest way to [Place]?",
              "How long will it take to get there?",
              "Is it within walking distance?",
              "Can I walk there from here?"
            ],
            "answer": "What is the quickest way to [Place]?"
          },
          {
            "question": "What does the phrase 'Turn left/right at the traffic lights' imply in the context of giving directions?",
            "options": [
              "To continue straight ahead",
              "To turn at the next intersection",
              "To follow a specific landmark",
              "To give directions to turn"
            ],
            "answer": "To give directions to turn"
          },
          {
            "question": "How would you ask someone to clarify their directions if you did not understand them clearly?",
            "options": [
              "Could you repeat that, please?",
              "Do I need to take a bus or train?",
              "Is it within walking distance?",
              "How long will it take to get there?"
            ],
            "answer": "Could you repeat that, please?"
          },
          {
            "question": "What is the meaning of 'It's across from/opposite the [Place]' in giving directions?",
            "options": [
              "It's on your left/right.",
              "It's across from/opposite the [Place].",
              "Go past the [Landmark] and you will see it.",
              "Take the first/second left/right."
            ],
            "answer": "It's across from/opposite the [Place]."
          },
          {
            "question": "How would you instruct someone to continue walking in a straight line for a certain distance in English?",
            "options": [
              "Go straight ahead for two blocks.",
              "Turn left/right at the traffic lights.",
              "Take the first/second left/right.",
              "It's on your left/right."
            ],
            "answer": "Go straight ahead for two blocks."
          },
          {
            "question": "What does 'Landmark' mean in the context of giving directions?",
            "options": [
              "A recognizable place used for navigation",
              "A way to ask for directions",
              "A way to give directions to turn",
              "A way to instruct someone to continue forward"
            ],
            "answer": "A recognizable place used for navigation"
          },
          {
            "question": "How would you ask if a place is far from your current location in English?",
            "options": [
              "Is it far from here?",
              "Can I walk there from here?",
              "How long will it take to get there?",
              "Do I need to take a bus or train?"
            ],
            "answer": "Is it far from here?"
          },
          {
            "question": "What is the meaning of 'You can't miss it' in giving directions?",
            "options": [
              "It's very obvious and easy to find",
              "It's far from here",
              "It's within walking distance",
              "You need to take a bus or train"
            ],
            "answer": "It's very obvious and easy to find"
          },
          {
            "question": "How would you ask if you are on the right road for a specific destination in English?",
            "options": [
              "Are we on the right road to [Destination]?",
              "Is this the right way to [Destination]?",
              "How do I get to [Destination] from here?",
              "Where is the nearest [Landmark/Place]?"
            ],
            "answer": "Are we on the right road to [Destination]?"
          },
          {
            "question": "What does 'Go past the [Landmark]' mean in giving directions?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To indicate a recognizable place"
          },
          {
            "question": "How would you give the instruction to cross a road or intersection in English?",
            "options": [
              "Cross the road at the traffic lights.",
              "Turn left/right at the traffic lights.",
              "Go straight ahead for two blocks.",
              "It's on your left/right."
            ],
            "answer": "Cross the road at the traffic lights."
          },
          {
            "question": "What does 'How long will it take to get there?' imply when asking for directions?",
            "options": [
              "To ask about the distance to the destination",
              "To ask about the time it takes to reach the destination",
              "To ask if a place is within walking distance",
              "To ask if you need to take a bus or train"
            ],
            "answer": "To ask about the time it takes to reach the destination"
          },
          {
            "question": "How would you ask if you need to take public transportation to reach a destination in English?",
            "options": [
              "Do I need to take a bus or train?",
              "Is it within walking distance?",
              "How long will it take to get there?",
              "Can I walk there from here?"
            ],
            "answer": "Do I need to take a bus or train?"
          },
          {
            "question": "What does 'You're going the wrong way' mean when giving directions?",
            "options": [
              "You are heading in the correct direction",
              "You are heading in the incorrect direction",
              "You need to take a bus or train",
              "You are within walking distance"
            ],
            "answer": "You are heading in the incorrect direction"
          },
          {
            "question": "How would you describe a location that is easily identifiable and hard to miss in English?",
            "options": [
              "It's on your left/right.",
              "It's across from/opposite the [Place].",
              "Go past the [Landmark] and you will see it.",
              "You can't miss it."
            ],
            "answer": "You can't miss it."
          },
          {
            "question": "What does 'Take the first/second left/right' mean in giving directions?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To give directions to turn"
          },
          {
            "question": "How would you request a map to help navigate in English?",
            "options": [
              "Can you show me on the map?",
              "Do I need to take a bus or train?",
              "Is it within walking distance?",
              "How long will it take to get there?"
            ],
            "answer": "Can you show me on the map?"
          },
          {
            "question": "What does 'It's on your left/right' mean when giving directions?",
            "options": [
              "To indicate the location relative to the person's position",
              "To give directions to turn",
              "To instruct someone to continue forward",
              "To show someone on the map"
            ],
            "answer": "To indicate the location relative to the person's position"
          }
        ],
        hausa: [
          {
            "question": "How would you politely ask someone to show you the way to a specific place in Hausa?",
            "options": [
              "Don Allah, za ka iya nuna mini hanyar zuwa [Wuri]?",
              "Za ka iya fada min yadda zan je [Wuri]?",
              "Ina [Alamar Wuri] mafi kusa?",
              "Ta yaya zan je [Wuri] daga nan?"
            ],
            "answer": "Don Allah, za ka iya nuna mini hanyar zuwa [Wuri]?"
          },
          {
            "question": "What is the meaning of 'Ta yaya zan je [Wuri] daga nan?' in English?",
            "options": [
              "How do I get to [Place] from here?",
              "Where is the nearest [Landmark]?",
              "Can you show me on the map?",
              "Is there a [Place/Landmark] nearby?"
            ],
            "answer": "How do I get to [Place] from here?"
          },
          {
            "question": "How would you ask for the quickest way to reach a destination in Hausa?",
            "options": [
              "Wace hanya ce mafi sauri zuwa [Wuri]?",
              "Ta yaya zan je [Wuri] daga nan?",
              "Ina [Alamar Wuri] mafi kusa?",
              "Akwai [Wuri/Alamar Wuri] a nan kusa?"
            ],
            "answer": "Wace hanya ce mafi sauri zuwa [Wuri]?"
          },
          {
            "question": "What does 'Juya hagu/dama' mean in the context of giving directions in Hausa?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn left/right",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To give directions to turn left/right"
          },
          {
            "question": "How would you ask someone to repeat the directions in Hausa?",
            "options": [
              "Za ka iya maimaitawa, don Allah?",
              "Shin ina bukatar daukar bas ko jirgin kasa?",
              "Shin yana nesa daga nan?",
              "Zan iya tafiya daga nan?"
            ],
            "answer": "Za ka iya maimaitawa, don Allah?"
          },
          {
            "question": "What is the meaning of 'Yana gefen hagu/dama' in giving directions in Hausa?",
            "options": [
              "It's on your left/right",
              "It's across from/opposite the [Place]",
              "Go past the [Landmark] and you will see it",
              "Take the first/second left/right"
            ],
            "answer": "It's on your left/right"
          },
          {
            "question": "How would you instruct someone to continue walking straight ahead for a certain distance in Hausa?",
            "options": [
              "Ka tafi kai tsaye sama da kwana biyu",
              "Juya hagu/dama a wurin fitila",
              "Ka dauki farko/na biyu hagu/dama",
              "Yana gefen hagu/dama"
            ],
            "answer": "Ka tafi kai tsaye sama da kwana biyu"
          },
          {
            "question": "What does 'Alamar Wuri' mean in the context of giving directions in Hausa?",
            "options": [
              "A recognizable place used for navigation",
              "A way to ask for directions",
              "A way to give directions to turn",
              "A way to instruct someone to continue forward"
            ],
            "answer": "A recognizable place used for navigation"
          },
          {
            "question": "How would you ask if a place is far from your current location in Hausa?",
            "options": [
              "Shin yana nesa daga nan?",
              "Zan iya tafiya daga nan?",
              "Zai dauki lokaci mai tsawo don isa can?",
              "Shin yana cikin nesa na tafiya?"
            ],
            "answer": "Shin yana nesa daga nan?"
          },
          {
            "question": "What is the meaning of 'Ba za ka rasa shi ba' in giving directions in Hausa?",
            "options": [
              "It's very obvious and easy to find",
              "It's far from here",
              "It's within walking distance",
              "You need to take a bus or train"
            ],
            "answer": "It's very obvious and easy to find"
          },
          {
            "question": "How would you ask if you are on the right road for a specific destination in Hausa?",
            "options": [
              "Shin wannan hanyar [Wuri] ce?",
              "Ta yaya zan je [Wuri] daga nan?",
              "Ina [Alamar Wuri] mafi kusa?",
              "Akwai [Wuri/Alamar Wuri] a nan kusa?"
            ],
            "answer": "Shin wannan hanyar [Wuri] ce?"
          },
          {
            "question": "What does 'Ka wuce [Alamar Wuri] kuma za ka gan shi' mean in giving directions in Hausa?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To indicate a recognizable place"
          },
          {
            "question": "How would you give the instruction to cross a road or intersection in Hausa?",
            "options": [
              "Tafi wurin fitila",
              "Juya hagu/dama a wurin fitila",
              "Ka tafi kai tsaye sama da kwana biyu",
              "Yana gefen hagu/dama"
            ],
            "answer": "Tafi wurin fitila"
          },
          {
            "question": "What does 'Zai dauki lokaci mai tsawo don isa can' imply when asking for directions in Hausa?",
            "options": [
              "To ask about the distance to the destination",
              "To ask about the time it takes to reach the destination",
              "To ask if a place is within walking distance",
              "To ask if you need to take a bus or train"
            ],
            "answer": "To ask about the time it takes to reach the destination"
          },
          {
            "question": "How would you ask if you need to take public transportation to reach a destination in Hausa?",
            "options": [
              "Shin ina bukatar daukar bas ko jirgin kasa?",
              "Shin yana nesa daga nan?",
              "Zan iya tafiya daga nan?",
              "Zai dauki lokaci mai tsawo don isa can?"
            ],
            "answer": "Shin ina bukatar daukar bas ko jirgin kasa?"
          },
          {
            "question": "What does 'Yana a fadin/opposite da [Wuri]' mean in giving directions in Hausa?",
            "options": [
              "It's on your left/right",
              "It's across from/opposite the [Place]",
              "Go past the [Landmark] and you will see it",
              "Take the first/second left/right"
            ],
            "answer": "It's across from/opposite the [Place]"
          },
          {
            "question": "How would you describe a location that is easily identifiable and hard to miss in Hausa?",
            "options": [
              "Yana gefen hagu/dama",
              "Yana a fadin/opposite da [Wuri]",
              "Ka wuce [Alamar Wuri] kuma za ka gan shi",
              "Ba za ka rasa shi ba"
            ],
            "answer": "Ba za ka rasa shi ba"
          },
          {
            "question": "What does 'Ka dauki farko/na biyu hagu/dama' mean in giving directions in Hausa?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To give directions to turn"
          },
          {
            "question": "How would you request a map to help navigate in Hausa?",
            "options": [
              "Za ka iya nuna mini a taswira?",
              "Shin ina bukatar daukar bas ko jirgin kasa?",
              "Shin yana nesa daga nan?",
              "Zan iya tafiya daga nan?"
            ],
            "answer": "Za ka iya nuna mini a taswira?"
          },
          {
            "question": "What does 'Yana gefen hagu/dama' mean when giving directions in Hausa?",
            "options": [
              "To indicate the location relative to the person's position",
              "To give directions to turn",
              "To instruct someone to continue forward",
              "To show someone on the map"
            ],
            "answer": "To indicate the location relative to the person's position"
          }
        ],
        french: [
          {
            "question": "How would you politely ask someone to show you the way to a specific place in French?",
            "options": [
              "Pourriez-vous m'indiquer le chemin vers [Endroit]?",
              "Excusez-moi, pouvez-vous me dire comment aller à [Endroit]?",
              "Où se trouve le [Point de Repère/Endroit] le plus proche?",
              "Comment puis-je aller à [Endroit] à partir d'ici?"
            ],
            "answer": "Excusez-moi, pouvez-vous me dire comment aller à [Endroit]?"
          },
          {
            "question": "What is the meaning of 'Où se trouve le [Point de Repère/Endroit] le plus proche?' in English?",
            "options": [
              "How do I get to [Place] from here?",
              "Where is the nearest [Landmark/Place]?",
              "Can you show me on the map?",
              "Is there a [Landmark/Place] nearby?"
            ],
            "answer": "Where is the nearest [Landmark/Place]?"
          },
          {
            "question": "How would you ask for the quickest way to reach a destination in French?",
            "options": [
              "Comment puis-je aller à [Endroit] à partir d'ici?",
              "Où se trouve le [Point de Repère/Endroit] le plus proche?",
              "Y a-t-il un [Point de Repère/Endroit] à proximité?",
              "Quel est le chemin le plus rapide pour aller à [Endroit]?"
            ],
            "answer": "Quel est le chemin le plus rapide pour aller à [Endroit]?"
          },
          {
            "question": "What does 'Tournez à gauche/droite au feu' mean in the context of giving directions in French?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn left/right at the traffic lights",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To give directions to turn left/right at the traffic lights"
          },
          {
            "question": "How would you ask someone to repeat the directions in French?",
            "options": [
              "Dois-je prendre un bus ou un train?",
              "Est-ce à distance de marche?",
              "Combien de temps cela prendra-t-il pour y arriver?",
              "Pourriez-vous répéter, s'il vous plaît?"
            ],
            "answer": "Pourriez-vous répéter, s'il vous plaît?"
          },
          {
            "question": "What is the meaning of 'C'est sur votre gauche/droite' in giving directions in French?",
            "options": [
              "It's across from the [Place]",
              "It's on your left/right",
              "Go past the [Landmark] and you will see it",
              "Take the first/second left/right"
            ],
            "answer": "It's on your left/right"
          },
          {
            "question": "How would you instruct someone to continue walking straight ahead for a certain distance in French?",
            "options": [
              "Prenez la première/deuxième à gauche/droite",
              "C'est en face du [Endroit]",
              "Allez tout droit pendant deux pâtés de maisons",
              "Passez devant le [Point de Repère] et vous le verrez"
            ],
            "answer": "Allez tout droit pendant deux pâtés de maisons"
          },
          {
            "question": "What does 'Point de Repère' mean in the context of giving directions in French?",
            "options": [
              "A recognizable place used for navigation",
              "A way to ask for directions",
              "A way to give directions to turn",
              "A way to instruct someone to continue forward"
            ],
            "answer": "A recognizable place used for navigation"
          },
          {
            "question": "How would you ask if a place is far from your current location in French?",
            "options": [
              "Puis-je y aller à pied à partir d'ici?",
              "Combien de temps cela prendra-t-il pour y arriver?",
              "Est-ce loin d'ici?",
              "Dois-je prendre un bus ou un train?"
            ],
            "answer": "Est-ce loin d'ici?"
          },
          {
            "question": "What is the meaning of 'Vous ne pouvez pas le manquer' in giving directions in French?",
            "options": [
              "It's far from here",
              "It's within walking distance",
              "You need to take a bus or train",
              "You can't miss it"
            ],
            "answer": "You can't miss it"
          },
          {
            "question": "How would you ask if you are on the right road for a specific destination in French?",
            "options": [
              "Où se trouve le [Point de Repère/Endroit] le plus proche?",
              "Comment puis-je aller à [Endroit] à partir d'ici?",
              "Est-ce que c'est la bonne route pour aller à [Endroit]?",
              "Y a-t-il un [Point de Repère/Endroit] à proximité?"
            ],
            "answer": "Est-ce que c'est la bonne route pour aller à [Endroit]?"
          },
          {
            "question": "What does 'Passez devant le [Point de Repère] et vous le verrez' mean in giving directions in French?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To indicate a recognizable place"
          },
          {
            "question": "How would you give the instruction to cross a road or intersection in French?",
            "options": [
              "Traversez la rue au feu",
              "Tournez à gauche/droite au feu",
              "Allez tout droit pendant deux pâtés de maisons",
              "C'est sur votre gauche/droite"
            ],
            "answer": "Traversez la rue au feu"
          },
          {
            "question": "What does 'Combien de temps cela prendra-t-il pour y arriver?' imply when asking for directions in French?",
            "options": [
              "To ask about the distance to the destination",
              "To ask about the time it takes to reach the destination",
              "To ask if a place is within walking distance",
              "To ask if you need to take a bus or train"
            ],
            "answer": "To ask about the time it takes to reach the destination"
          },
          {
            "question": "How would you ask if you need to take public transportation to reach a destination in French?",
            "options": [
              "Dois-je prendre un bus ou un train?",
              "Est-ce à distance de marche?",
              "Combien de temps cela prendra-t-il pour y arriver?",
              "Puis-je y aller à pied à partir d'ici?"
            ],
            "answer": "Dois-je prendre un bus ou un train?"
          },
          {
            "question": "What does 'C'est en face du [Endroit]' mean in giving directions in French?",
            "options": [
              "It's on your left/right",
              "It's across from the [Place]",
              "Go past the [Landmark] and you will see it",
              "Take the first/second left/right"
            ],
            "answer": "It's across from the [Place]"
          },
          {
            "question": "How would you describe a location that is easily identifiable and hard to miss in French?",
            "options": [
              "C'est sur votre gauche/droite",
              "C'est en face du [Endroit]",
              "Passez devant le [Point de Repère] et vous le verrez",
              "Vous ne pouvez pas le manquer"
            ],
            "answer": "Vous ne pouvez pas le manquer"
          },
          {
            "question": "What does 'Prenez la première/deuxième à gauche/droite' mean in giving directions in French?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To give directions to turn"
          },
          {
            "question": "How would you request a map to help navigate in French?",
            "options": [
              "Pouvez-vous me montrer sur la carte?",
              "Dois-je prendre un bus ou un train?",
              "Est-ce à distance de marche?",
              "Combien de temps cela prendra-t-il pour y arriver?"
            ],
            "answer": "Pouvez-vous me montrer sur la carte?"
          },
          {
            "question": "What does 'C'est sur votre gauche/droite' mean when giving directions in French?",
            "options": [
              "To indicate the location relative to the person's position",
              "To give directions to turn",
              "To instruct someone to continue forward",
              "To show someone on the map"
            ],
            "answer": "To indicate the location relative to the person's position"
          }
        ],
        spanish: [
          {
            "question": "How would you politely ask someone to show you the way to a specific place in Spanish?",
            "options": [
              "¿Podría indicarme el camino a [Lugar]?",
              "Disculpe, ¿puede decirme cómo llegar a [Lugar]?",
              "¿Dónde está el/la [Punto de Referencia/Lugar] más cercano/a?",
              "¿Cómo llego a [Lugar] desde aquí?"
            ],
            "answer": "Disculpe, ¿puede decirme cómo llegar a [Lugar]?"
          },
          {
            "question": "What is the meaning of '¿Dónde está el/la [Punto de Referencia/Lugar] más cercano/a?' in English?",
            "options": [
              "How do I get to [Place] from here?",
              "Where is the nearest [Landmark/Place]?",
              "Can you show me on the map?",
              "Is there a [Landmark/Place] nearby?"
            ],
            "answer": "Where is the nearest [Landmark/Place]?"
          },
          {
            "question": "How would you ask for the quickest way to reach a destination in Spanish?",
            "options": [
              "¿Cómo llego a [Lugar] desde aquí?",
              "¿Dónde está el/la [Punto de Referencia/Lugar] más cercano/a?",
              "¿Hay un/a [Punto de Referencia/Lugar] cerca?",
              "¿Cuál es la manera más rápida de llegar a [Lugar]?"
            ],
            "answer": "¿Cuál es la manera más rápida de llegar a [Lugar]?"
          },
          {
            "question": "What does 'Gire a la izquierda/derecha en el semáforo' mean in the context of giving directions in Spanish?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn left/right at the traffic lights",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To give directions to turn left/right at the traffic lights"
          },
          {
            "question": "How would you ask someone to repeat the directions in Spanish?",
            "options": [
              "¿Necesito tomar un autobús o tren?",
              "¿Está a una distancia caminable?",
              "¿Cuánto tiempo tardará en llegar allí?",
              "¿Puede repetir eso, por favor?"
            ],
            "answer": "¿Puede repetir eso, por favor?"
          },
          {
            "question": "What is the meaning of 'Está a su izquierda/derecha' in giving directions in Spanish?",
            "options": [
              "It's across from the [Place]",
              "It's on your left/right",
              "Go past the [Landmark] and you will see it",
              "Take the first/second left/right"
            ],
            "answer": "It's on your left/right"
          },
          {
            "question": "How would you instruct someone to continue walking straight ahead for a certain distance in Spanish?",
            "options": [
              "Tome la primera/segunda a la izquierda/derecha",
              "Está frente al [Lugar]",
              "Siga recto dos cuadras",
              "Pase el/la [Punto de Referencia] y lo/la verá"
            ],
            "answer": "Siga recto dos cuadras"
          },
          {
            "question": "What does 'Punto de Referencia' mean in the context of giving directions in Spanish?",
            "options": [
              "A recognizable place used for navigation",
              "A way to ask for directions",
              "A way to give directions to turn",
              "A way to instruct someone to continue forward"
            ],
            "answer": "A recognizable place used for navigation"
          },
          {
            "question": "How would you ask if a place is far from your current location in Spanish?",
            "options": [
              "¿Puedo caminar hasta allí desde aquí?",
              "¿Cuánto tiempo tardará en llegar allí?",
              "¿Está lejos de aquí?",
              "¿Necesito tomar un autobús o tren?"
            ],
            "answer": "¿Está lejos de aquí?"
          },
          {
            "question": "What is the meaning of 'No puede perderlo/la' in giving directions in Spanish?",
            "options": [
              "It's far from here",
              "It's within walking distance",
              "You need to take a bus or train",
              "You can't miss it"
            ],
            "answer": "You can't miss it"
          },
          {
            "question": "How would you ask if you are on the right road for a specific destination in Spanish?",
            "options": [
              "¿Dónde está el/la [Punto de Referencia/Lugar] más cercano/a?",
              "¿Cómo llego a [Lugar] desde aquí?",
              "¿Estoy en el camino correcto para llegar a [Lugar]?",
              "¿Hay un/a [Punto de Referencia/Lugar] cerca?"
            ],
            "answer": "¿Estoy en el camino correcto para llegar a [Lugar]?"
          },
          {
            "question": "What does 'Pase el/la [Punto de Referencia] y lo/la verá' mean in giving directions in Spanish?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To indicate a recognizable place"
          },
          {
            "question": "How would you give the instruction to cross a road or intersection in Spanish?",
            "options": [
              "Cruce la calle en el semáforo",
              "Gire a la izquierda/derecha en el semáforo",
              "Siga recto dos cuadras",
              "Está a su izquierda/derecha"
            ],
            "answer": "Cruce la calle en el semáforo"
          },
          {
            "question": "What does '¿Cuánto tiempo tardará en llegar allí?' imply when asking for directions in Spanish?",
            "options": [
              "To ask about the distance to the destination",
              "To ask about the time it takes to reach the destination",
              "To ask if a place is within walking distance",
              "To ask if you need to take a bus or train"
            ],
            "answer": "To ask about the time it takes to reach the destination"
          },
          {
            "question": "How would you ask if you need to take public transportation to reach a destination in Spanish?",
            "options": [
              "¿Necesito tomar un autobús o tren?",
              "¿Está a una distancia caminable?",
              "¿Cuánto tiempo tardará en llegar allí?",
              "¿Puedo caminar hasta allí desde aquí?"
            ],
            "answer": "¿Necesito tomar un autobús o tren?"
          },
          {
            "question": "What does 'Está frente al [Lugar]' mean in giving directions in Spanish?",
            "options": [
              "It's on your left/right",
              "It's across from the [Place]",
              "Go past the [Landmark] and you will see it",
              "Take the first/second left/right"
            ],
            "answer": "It's across from the [Place]"
          },
          {
            "question": "How would you describe a location that is easily identifiable and hard to miss in Spanish?",
            "options": [
              "Está a su izquierda/derecha",
              "Está frente al [Lugar]",
              "Pase el/la [Punto de Referencia] y lo/la verá",
              "No puede perderlo/la"
            ],
            "answer": "No puede perderlo/la"
          },
          {
            "question": "What does 'Tome la primera/segunda a la izquierda/derecha' mean in giving directions in Spanish?",
            "options": [
              "To instruct someone to continue forward",
              "To give directions to turn",
              "To indicate a recognizable place",
              "To show someone on the map"
            ],
            "answer": "To give directions to turn"
          },
          {
            "question": "How would you request a map to help navigate in Spanish?",
            "options": [
              "¿Puede mostrarme en el mapa?",
              "¿Necesito tomar un autobús o tren?",
              "¿Está a una distancia caminable?",
              "¿Cuánto tiempo tardará en llegar allí?"
            ],
            "answer": "¿Puede mostrarme en el mapa?"
          },
          {
            "question": "What does 'Está a su izquierda/derecha' mean when giving directions in Spanish?",
            "options": [
              "To indicate the location relative to the person's position",
              "To give directions to turn",
              "To instruct someone to continue forward",
              "To show someone on the map"
            ],
            "answer": "To indicate the location relative to the person's position"
          }
        ]
      }
    }
  ]

  const introduction = [
    {
      topic: "Introducing Yourself",
      languages: {
        english: [
          {
            "question": "How would you formally introduce yourself in a professional setting in English?",
            "options": [
              "Hi, I’m [Name]. Nice to meet you!",
              "Hello, my name is [Name], and I am the [Job Title] at [Company].",
              "Hey, I’m [Name]. Just started today.",
              "Good morning, I’m [Name], the new [Job Title] here."
            ],
            "answer": "Hello, my name is [Name], and I am the [Job Title] at [Company]."
          },
          {
            "question": "What is the meaning of 'Hello, my name is [Name], and I am the [Job Title] at [Company]' in English?",
            "options": [
              "A casual introduction suitable for social or informal settings.",
              "A formal introduction including name, job title, and company.",
              "A greeting with introduction of name and job title.",
              "A structured introduction showing excitement or gratitude."
            ],
            "answer": "A formal introduction including name, job title, and company."
          },
          {
            "question": "How would you informally introduce yourself in English?",
            "options": [
              "Good morning, I’m [Name], the new [Job Title] here.",
              "Hi, I’m [Name]. Nice to meet you!",
              "Hello everyone I’m so excited to be here today. My name is [Name].",
              "First, I’d like to thank you for taking the time to meet with me today. My name is [Name]."
            ],
            "answer": "Hi, I’m [Name]. Nice to meet you!"
          },
          {
            "question": "What is the purpose of starting an introduction with 'Hello everyone I’m so excited to be here today'?",
            "options": [
              "To show formal greeting and introduce oneself.",
              "To express gratitude before introducing oneself.",
              "To start with a greeting and show excitement or gratitude.",
              "To mention what you do or other interesting information about yourself."
            ],
            "answer": "To start with a greeting and show excitement or gratitude."
          },
          {
            "question": "How would you introduce yourself in a structured manner, suitable for interviews or formal meetings?",
            "options": [
              "First, I’d like to thank you for taking the time to meet with me today. My name is [Name], and I’m a [Job Title] with [Company].",
              "Hello everyone I’m so excited to be here today. My name is [Name], and I’m currently based in [Location].",
              "Hi, I’m [Name]. Nice to meet you!",
              "Good morning, I’m [Name], the new [Job Title] here."
            ],
            "answer": "First, I’d like to thank you for taking the time to meet with me today. My name is [Name], and I’m a [Job Title] with [Company]."
          },
          {
            "question": "What does 'Nice to meet you' mean in the context of introducing yourself in English?",
            "options": [
              "To start a formal introduction",
              "To express politeness after introducing oneself",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To express politeness after introducing oneself"
          },
          {
            "question": "How would you greet your audience and show excitement or gratitude at the beginning of an introduction in English?",
            "options": [
              "Hello everyone I’m so excited to be here today.",
              "First, I’d like to thank you for taking the time to meet with me today.",
              "My name is [Name], and I’m currently based in [Location].",
              "I’m a project manager with over ten years of experience."
            ],
            "answer": "Hello everyone I’m so excited to be here today."
          },
          {
            "question": "What is the importance of sharing your name and relevant information about yourself during an introduction in English?",
            "options": [
              "To show formal greeting and introduce oneself.",
              "To express gratitude before introducing oneself.",
              "To share what you do or other interesting information about yourself.",
              "To mention what you’re hoping to contribute or learn."
            ],
            "answer": "To share what you do or other interesting information about yourself."
          },
          {
            "question": "How would you mention what you’re hoping to contribute or learn during an introduction in English?",
            "options": [
              "Over the next few hours, I’m hoping to discover new networking opportunities.",
              "I’m a project manager with over ten years of experience.",
              "My name is [Name], and I’m currently based in [Location].",
              "First, I’d like to thank you for taking the time to meet with me today."
            ],
            "answer": "Over the next few hours, I’m hoping to discover new networking opportunities."
          },
          {
            "question": "What is the purpose of asking a question to invite conversation after introducing yourself in English?",
            "options": [
              "To show formal greeting and introduce oneself.",
              "To express gratitude before introducing oneself.",
              "To invite further conversation and engagement.",
              "To mention what you’re hoping to contribute or learn."
            ],
            "answer": "To invite further conversation and engagement."
          },
          {
            "question": "How would you introduce yourself in a way that shows enthusiasm or excitement in English?",
            "options": [
              "Hello everyone I’m so excited to be here today.",
              "Good morning, I’m [Name], the new [Job Title] here.",
              "Hi, I’m [Name]. Nice to meet you!",
              "First, I’d like to thank you for taking the time to meet with me today."
            ],
            "answer": "Hello everyone I’m so excited to be here today."
          },
          {
            "question": "What does 'I’m excited to be here today' mean in the context of introducing yourself in English?",
            "options": [
              "To start a formal introduction",
              "To express politeness after introducing oneself",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To show enthusiasm"
          },
          {
            "question": "How would you introduce yourself to a group of people in a structured manner in English?",
            "options": [
              "Ladies and gentlemen, without further ado, it is my pleasure to introduce you to the Founder and CEO of Tasty Sweets, Mrs. Rachel Malloy.",
              "Hello everyone I’m so excited to be here today. My name is [Name], and I’m currently based in [Location].",
              "Hi, I’m [Name]. Nice to meet you!",
              "First, I’d like to thank you for taking the time to meet with me today. My name is [Name], and I’m a [Job Title] with [Company]."
            ],
            "answer": "Hello everyone I’m so excited to be here today. My name is [Name], and I’m currently based in [Location]."
          },
          {
            "question": "What is the difference between formal and informal introductions in English?",
            "options": [
              "Formal introductions include name and job title, while informal introductions are casual and social.",
              "Formal introductions are casual, while informal introductions are formal.",
              "Formal introductions show excitement or gratitude, while informal introductions do not.",
              "Formal introductions are used in social settings, while informal introductions are used in professional settings."
            ],
            "answer": "Formal introductions include name and job title, while informal introductions are casual and social."
          },
          {
            "question": "How would you introduce a colleague or yourself to a customer or client in English?",
            "options": [
              "Miss Nelson, I am pleased to introduce you to our head of account management, Mrs. Morgado.",
              "Hello everyone I’m so excited to be here today. My name is [Name], and I’m currently based in [Location].",
              "Hi, I’m [Name]. Nice to meet you!",
              "First, I’d like to thank you for taking the time to meet with me today. My name is [Name], and I’m a [Job Title] with [Company]."
            ],
            "answer": "Miss Nelson, I am pleased to introduce you to our head of account management, Mrs. Morgado."
          },
          {
            "question": "What is the importance of addressing the customer or client first when introducing a business colleague or yourself in English?",
            "options": [
              "To show respect and professionalism",
              "To start a casual conversation",
              "To show excitement or gratitude",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To show respect and professionalism"
          }
        ],
        hausa: [
          {
            "question": "How would you formally introduce yourself in a professional setting in Hausa?",
            "options": [
              "Sannu, sunana ni [Sunan Kai]. Na fara aiki a yau.",
              "Sannu, sunana ni [Sunan Kai]. Ni ne sabon [Matsayi a Aiki] a nan.",
              "Sannu kwana, sunana ni [Sunan Kai], kuma ni ne [Matsayi a Aiki] a [Kamfanin].",
              "Sannu, sunana ni [Sunan Kai]. Ina faranta da haduwa!"
            ],
            "answer": "Sannu kwana, sunana ni [Sunan Kai], kuma ni ne [Matsayi a Aiki] a [Kamfanin]."
          },
          {
            "question": "What is the meaning of 'Sannu, sunana ni [Sunan Kai]. Ni ne sabon [Matsayi a Aiki] a nan.' in English?",
            "options": [
              "A casual introduction suitable for social or informal settings.",
              "A formal greeting with introduction of name and job title.",
              "A structured introduction showing excitement or gratitude.",
              "A greeting with introduction of name and company."
            ],
            "answer": "A formal greeting with introduction of name and job title."
          },
          {
            "question": "How would you informally introduce yourself in Hausa?",
            "options": [
              "Sannu kwana, sunana ni [Sunan Kai], kuma ni ne [Matsayi a Aiki] a [Kamfanin].",
              "Sannu, sunana ni [Sunan Kai]. Ina faranta da haduwa!",
              "Sannu, sunana ni [Sunan Kai]. Na fara aiki a yau.",
              "Sannu kwana zuri Ina faranta da haduwa a yau. Sunana ni [Sunan Kai], kuma ni ne sabon [Matsayi a Aiki] a nan."
            ],
            "answer": "Sannu, sunana ni [Sunan Kai]. Ina faranta da haduwa!"
          },
          {
            "question": "What is the purpose of starting an introduction with 'Sannu kwana zuri Ina faranta da haduwa a yau' in Hausa?",
            "options": [
              "To show formal greeting and introduce oneself.",
              "To express gratitude before introducing oneself.",
              "To start with a greeting and show excitement or gratitude.",
              "To mention what you do or other interesting information about yourself."
            ],
            "answer": "To start with a greeting and show excitement or gratitude."
          },
          {
            "question": "How would you introduce yourself in a structured manner, suitable for interviews or formal meetings in Hausa?",
            "options": [
              "Da fatan Allah, ina faranta da haduwa da kai a yau. Sunana ni [Sunan Kai], kuma ni ne [Matsayi a Aiki] a [Kamfanin].",
              "Sannu kwana zuri Ina faranta da haduwa a yau. Sunana ni [Sunan Kai], kuma ni ne sabon [Matsayi a Aiki] a nan.",
              "Sannu, sunana ni [Sunan Kai]. Ina faranta da haduwa!",
              "Sannu, sunana ni [Sunan Kai]. Na fara aiki a yau."
            ],
            "answer": "Da fatan Allah, ina faranta da haduwa da kai a yau. Sunana ni [Sunan Kai], kuma ni ne [Matsayi a Aiki] a [Kamfanin]."
          },
          {
            "question": "What does 'Ina faranta da haduwa' mean in the context of introducing yourself in Hausa?",
            "options": [
              "To start a formal introduction",
              "To express politeness after introducing oneself",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To express politeness after introducing oneself"
          },
          {
            "question": "How would you greet your audience and show excitement or gratitude at the beginning of an introduction in Hausa?",
            "options": [
              "Da fatan Allah, ina faranta da haduwa da kai a yau.",
              "Sannu, sunana ni [Sunan Kai]. Ni ne sabon [Matsayi a Aiki] a nan.",
              "Sannu kwana zuri Ina faranta da haduwa a yau.",
              "Sannu, sunana ni [Sunan Kai]. Ina faranta da haduwa!"
            ],
            "answer": "Sannu kwana zuri Ina faranta da haduwa a yau."
          },
          {
            "question": "What is the importance of sharing your name and relevant information about yourself during an introduction in Hausa?",
            "options": [
              "To show formal greeting and introduce oneself.",
              "To express gratitude before introducing oneself.",
              "To share what you do or other interesting information about yourself.",
              "To mention what you’re hoping to contribute or learn."
            ],
            "answer": "To share what you do or other interesting information about yourself."
          },
          {
            "question": "How would you mention what you’re hoping to contribute or learn during an introduction in Hausa?",
            "options": [
              "A ranar nan, ina faranta da gano sababbin damarai na shirye-shirye.",
              "Ni ne [Matsayi a Aiki] tare da shekaru goma na fannin daban-daban.",
              "Sunana ni [Sunan Kai], kuma ni ne sabon [Matsayi a Aiki] a nan.",
              "Da fatan Allah, ina faranta da haduwa da kai a yau. Sunana ni [Sunan Kai], kuma ni ne [Matsayi a Aiki] a [Kamfanin]."
            ],
            "answer": "A ranar nan, ina faranta da gano sababbin damarai na shirye-shirye."
          },
          {
            "question": "What is the purpose of asking a question to invite conversation after introducing yourself in Hausa?",
            "options": [
              "To show respect and professionalism",
              "To express gratitude before introducing oneself.",
              "To invite further conversation and engagement.",
              "To mention what you’re hoping to contribute or learn."
            ],
            "answer": "To invite further conversation and engagement."
          },
          {
            "question": "How would you introduce yourself in a way that shows enthusiasm or excitement in Hausa?",
            "options": [
              "Da fatan Allah, ina faranta da haduwa da kai a yau.",
              "Sannu kwana zuri Ina faranta da haduwa a yau.",
              "Sannu, sunana ni [Sunan Kai]. Ina faranta da haduwa!",
              "Sannu, sunana ni [Sunan Kai]. Na fara aiki a yau."
            ],
            "answer": "Sannu kwana zuri Ina faranta da haduwa a yau."
          },
          {
            "question": "What does 'Ina faranta da haduwa a yau' mean in the context of introducing yourself in Hausa?",
            "options": [
              "To start a formal introduction",
              "To express politeness after introducing oneself",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To show enthusiasm"
          },
          {
            "question": "How would you introduce yourself to a group of people in a structured manner in Hausa?",
            "options": [
              "Sannu kwana zuri Ina faranta da haduwa a yau. Sunana ni [Sunan Kai], kuma ni ne sabon [Matsayi a Aiki] a nan.",
              "Da fatan Allah, ina faranta da haduwa da kai a yau. Sunana ni [Sunan Kai], kuma ni ne [Matsayi a Aiki] a [Kamfanin].",
              "Sannu, sunana ni [Sunan Kai]. Ina faranta da haduwa!",
              "Sannu, sunana ni [Sunan Kai]. Na fara aiki a yau."
            ],
            "answer": "Sannu kwana zuri Ina faranta da haduwa a yau. Sunana ni [Sunan Kai], kuma ni ne sabon [Matsayi a Aiki] a nan."
          },
          {
            "question": "What is the difference between formal and informal introductions in Hausa?",
            "options": [
              "Formal introductions include name and job title, while informal introductions are casual and social.",
              "Formal introductions are casual, while informal introductions are formal.",
              "Formal introductions show excitement or gratitude, while informal introductions do not.",
              "Formal introductions are used in social settings, while informal introductions are used in professional settings."
            ],
            "answer": "Formal introductions include name and job title, while informal introductions are casual and social."
          },
          {
            "question": "How would you introduce a colleague or yourself to a customer or client in Hausa?",
            "options": [
              "Sannu, sunana ni [Sunan Kai]. Ni ne sabon [Matsayi a Aiki] a nan.",
              "Da fatan Allah, ina faranta da haduwa da kai a yau. Sunana ni [Sunan Kai], kuma ni ne [Matsayi a Aiki] a [Kamfanin].",
              "Sannu kwana zuri Ina faranta da haduwa a yau. Sunana ni [Sunan Kai], kuma ni ne sabon [Matsayi a Aiki] a nan.",
              "Ga Audu (Here is Audu)"
            ],
            "answer": "Ga Audu (Here is Audu)"
          },
          {
            "question": "What is the importance of addressing the customer or client first when introducing a business colleague or yourself in Hausa?",
            "options": [
              "To show respect and professionalism",
              "To express gratitude before introducing oneself.",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To show respect and professionalism"
          },
          {
            "question": "How would you ask someone's name in Hausa?",
            "options": [
              "Mi sunanka? (>m) Mi sunanki? (>f)",
              "Sannu, sunana ni [Sunan Kai]. Ni ne sabon [Matsayi a Aiki] a nan.",
              "Da fatan Allah, ina faranta da haduwa da kai a yau.",
              "Sannu kwana zuri Ina faranta da haduwa a yau."
            ],
            "answer": "Mi sunanka? (>m) Mi sunanki? (>f)"
          },
          {
            "question": "How would you respond to 'Mi sunanka?' in Hausa?",
            "options": [
              "Sannu, sunana ni [Sunan Kai].",
              "Da fatan Allah, ina faranta da haduwa da kai a yau.",
              "Sannu kwana zuri Ina faranta da haduwa a yau.",
              "Ni ne [Sunan Kai]"
            ],
            "answer": "Ni ne [Sunan Kai]"
          }
        ],
        french: [
          {
            "question": "How would you formally introduce yourself in a professional setting in French?",
            "options": [
              "Salut, je m'appelle [Nom]. Enchanté(e) de vous rencontrer!",
              "Bonjour, je m'appelle [Nom], et je suis [Titre de Poste] chez [Entreprise].",
              "Bonjour, je m'appelle [Nom]. Je suis le nouveau [Titre de Poste] ici.",
              "Salut, je m'appelle [Nom]. Je viens de commencer aujourd'hui."
            ],
            "answer": "Bonjour, je m'appelle [Nom], et je suis [Titre de Poste] chez [Entreprise]."
          },
          {
            "question": "What is the meaning of 'Bonjour, je m'appelle [Nom]. Je suis le nouveau [Titre de Poste] ici.' in English?",
            "options": [
              "A casual introduction suitable for social or informal settings.",
              "A formal greeting with introduction of name and job title.",
              "A structured introduction showing excitement or gratitude.",
              "A greeting with introduction of name and company."
            ],
            "answer": "A formal greeting with introduction of name and job title."
          },
          {
            "question": "How would you informally introduce yourself in French?",
            "options": [
              "Bonjour, je m'appelle [Nom], et je suis [Titre de Poste] chez [Entreprise].",
              "Salut, je m'appelle [Nom]. Enchanté(e) de vous rencontrer!",
              "Bonjour, je m'appelle [Nom]. Je suis le nouveau [Titre de Poste] ici.",
              "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui. Mon nom est [Nom], et je suis actuellement basé(e) à [Lieu]."
            ],
            "answer": "Salut, je m'appelle [Nom]. Enchanté(e) de vous rencontrer!"
          },
          {
            "question": "What is the purpose of starting an introduction with 'Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui' in French?",
            "options": [
              "To show formal greeting and introduce oneself.",
              "To express gratitude before introducing oneself.",
              "To start with a greeting and show excitement or gratitude.",
              "To mention what you do or other interesting information about yourself."
            ],
            "answer": "To start with a greeting and show excitement or gratitude."
          },
          {
            "question": "How would you introduce yourself in a structured manner, suitable for interviews or formal meetings in French?",
            "options": [
              "Merci de prendre le temps de me rencontrer aujourd'hui. Mon nom est [Nom], et je suis [Titre de Poste] chez [Entreprise].",
              "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui. Mon nom est [Nom], et je suis actuellement basé(e) à [Lieu].",
              "Salut, je m'appelle [Nom]. Enchanté(e) de vous rencontrer!",
              "Bonjour, je m'appelle [Nom]. Je suis le nouveau [Titre de Poste] ici."
            ],
            "answer": "Merci de prendre le temps de me rencontrer aujourd'hui. Mon nom est [Nom], et je suis [Titre de Poste] chez [Entreprise]."
          },
          {
            "question": "What does 'Enchanté(e) de vous rencontrer' mean in the context of introducing yourself in French?",
            "options": [
              "To start a formal introduction",
              "To express politeness after introducing oneself",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To express politeness after introducing oneself"
          },
          {
            "question": "How would you greet your audience and show excitement or gratitude at the beginning of an introduction in French?",
            "options": [
              "Merci de prendre le temps de me rencontrer aujourd'hui.",
              "Bonjour, je m'appelle [Nom]. Je suis le nouveau [Titre de Poste] ici.",
              "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui.",
              "Salut, je m'appelle [Nom]. Enchanté(e) de vous rencontrer!"
            ],
            "answer": "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui."
          },
          {
            "question": "What is the importance of sharing your name and relevant information about yourself during an introduction in French?",
            "options": [
              "To show formal greeting and introduce oneself.",
              "To express gratitude before introducing oneself.",
              "To share what you do or other interesting information about yourself.",
              "To mention what you’re hoping to contribute or learn."
            ],
            "answer": "To share what you do or other interesting information about yourself."
          },
          {
            "question": "How would you mention what you’re hoping to contribute or learn during an introduction in French?",
            "options": [
              "Au cours des prochaines heures, j'espère découvrir de nouvelles opportunités de networking.",
              "Je suis un(e) manager de projet avec plus de dix ans d'expérience dans divers secteurs.",
              "Mon nom est [Nom], et je suis actuellement basé(e) à [Lieu].",
              "Merci de prendre le temps de me rencontrer aujourd'hui. Mon nom est [Nom], et je suis [Titre de Poste] chez [Entreprise]."
            ],
            "answer": "Au cours des prochaines heures, j'espère découvrir de nouvelles opportunités de networking."
          },
          {
            "question": "What is the purpose of asking a question to invite conversation after introducing yourself in French?",
            "options": [
              "To show respect and professionalism",
              "To express gratitude before introducing oneself.",
              "To invite further conversation and engagement.",
              "To mention what you’re hoping to contribute or learn."
            ],
            "answer": "To invite further conversation and engagement."
          },
          {
            "question": "How would you introduce yourself in a way that shows enthusiasm or excitement in French?",
            "options": [
              "Merci de prendre le temps de me rencontrer aujourd'hui.",
              "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui.",
              "Salut, je m'appelle [Nom]. Enchanté(e) de vous rencontrer!",
              "Bonjour, je m'appelle [Nom]. Je suis le nouveau [Titre de Poste] ici."
            ],
            "answer": "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui."
          },
          {
            "question": "What does 'Je suis ravi(e) d'être ici aujourd'hui' mean in the context of introducing yourself in French?",
            "options": [
              "To start a formal introduction",
              "To express politeness after introducing oneself",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To show enthusiasm"
          },
          {
            "question": "How would you introduce yourself to a group of people in a structured manner in French?",
            "options": [
              "Merci de prendre le temps de me rencontrer aujourd'hui. Mon nom est [Nom], et je suis [Titre de Poste] chez [Entreprise].",
              "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui. Mon nom est [Nom], et je suis actuellement basé(e) à [Lieu].",
              "Salut, je m'appelle [Nom]. Enchanté(e) de vous rencontrer!",
              "Bonjour, je m'appelle [Nom]. Je suis le nouveau [Titre de Poste] ici."
            ],
            "answer": "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui. Mon nom est [Nom], et je suis actuellement basé(e) à [Lieu]."
          },
          {
            "question": "What is the difference between formal and informal introductions in French?",
            "options": [
              "Formal introductions include name and job title, while informal introductions are casual and social.",
              "Formal introductions are casual, while informal introductions are formal.",
              "Formal introductions show excitement or gratitude, while informal introductions do not.",
              "Formal introductions are used in social settings, while informal introductions are used in professional settings."
            ],
            "answer": "Formal introductions include name and job title, while informal introductions are casual and social."
          },
          {
            "question": "How would you introduce a colleague or yourself to a customer or client in French?",
            "options": [
              "Bonjour, je m'appelle [Nom]. Je suis le nouveau [Titre de Poste] ici.",
              "Merci de prendre le temps de me rencontrer aujourd'hui. Mon nom est [Nom], et je suis [Titre de Poste] chez [Entreprise].",
              "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui. Mon nom est [Nom], et je suis actuellement basé(e) à [Lieu].",
              "Permettez-moi de vous présenter mon collègue, le directeur marketing."
            ],
            "answer": "Permettez-moi de vous présenter mon collègue, le directeur marketing."
          },
          {
            "question": "What is the importance of addressing the customer or client first when introducing a business colleague or yourself in French?",
            "options": [
              "To show respect and professionalism",
              "To express gratitude before introducing oneself.",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To show respect and professionalism"
          },
          {
            "question": "How would you ask someone's name in French?",
            "options": [
              "Comment t'appelles-tu ?",
              "Bonjour, je m'appelle [Nom]. Je suis le nouveau [Titre de Poste] ici.",
              "Merci de prendre le temps de me rencontrer aujourd'hui.",
              "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui."
            ],
            "answer": "Comment t'appelles-tu ?"
          },
          {
            "question": "How would you respond to 'Comment t'appelles-tu ?' in French?",
            "options": [
              "Je m'appelle [Nom].",
              "Merci de prendre le temps de me rencontrer aujourd'hui.",
              "Bonjour à tous ! Je suis ravi(e) d'être ici aujourd'hui.",
              "Je suis [Titre de Poste] chez [Entreprise]."
            ],
            "answer": "Je m'appelle [Nom]."
          }
        ],
        spanish: [
          {
            "question": "How would you formally introduce yourself in a professional setting in Spanish?",
            "options": [
              "Hola, me llamo [Nombre]. Encantado/a de conocerte!",
              "Buenos días, me llamo [Nombre] y soy el nuevo [Título de Puesto] aquí.",
              "Buenos días, me llamo [Nombre] y soy [Título de Puesto] en [Empresa].",
              "Hola, me llamo [Nombre]. Acabo de empezar hoy."
            ],
            "answer": "Buenos días, me llamo [Nombre] y soy el nuevo [Título de Puesto] aquí."
          },
          {
            "question": "What is the meaning of 'Buenos días, me llamo [Nombre] y soy el nuevo [Título de Puesto] aquí.' in English?",
            "options": [
              "A casual introduction suitable for social or informal settings.",
              "A formal greeting with introduction of name and job title.",
              "A structured introduction showing excitement or gratitude.",
              "A greeting with introduction of name and company."
            ],
            "answer": "A formal greeting with introduction of name and job title."
          },
          {
            "question": "How would you informally introduce yourself in Spanish?",
            "options": [
              "Buenos días, me llamo [Nombre] y soy el nuevo [Título de Puesto] aquí.",
              "Hola, me llamo [Nombre]. Encantado/a de conocerte!",
              "Buenos días, me llamo [Nombre] y soy [Título de Puesto] en [Empresa].",
              "Hola, me llamo [Nombre]. Acabo de empezar hoy."
            ],
            "answer": "Hola, me llamo [Nombre]. Encantado/a de conocerte!"
          },
          {
            "question": "What is the purpose of starting an introduction with 'Buenos días a todos. Estoy emocionado/a de estar aquí hoy.' in Spanish?",
            "options": [
              "To show formal greeting and introduce oneself.",
              "To express gratitude before introducing oneself.",
              "To start with a greeting and show excitement or gratitude.",
              "To mention what you do or other interesting information about yourself."
            ],
            "answer": "To start with a greeting and show excitement or gratitude."
          },
          {
            "question": "How would you introduce yourself in a structured manner, suitable for interviews or formal meetings in Spanish?",
            "options": [
              "Primero, quiero agradecerles por tomarse el tiempo de reunirse conmigo hoy. Me llamo [Nombre] y soy [Título de Puesto] en [Empresa].",
              "Buenos días a todos. Estoy emocionado/a de estar aquí hoy. Me llamo [Nombre] y actualmente vivo en [Lugar].",
              "Hola, me llamo [Nombre]. Encantado/a de conocerte!",
              "Buenos días, me llamo [Nombre] y soy el nuevo [Título de Puesto] aquí."
            ],
            "answer": "Primero, quiero agradecerles por tomarse el tiempo de reunirse conmigo hoy. Me llamo [Nombre] y soy [Título de Puesto] en [Empresa]."
          },
          {
            "question": "What does 'Encantado/a de conocerte' mean in the context of introducing yourself in Spanish?",
            "options": [
              "To start a formal introduction",
              "To express politeness after introducing oneself",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To express politeness after introducing oneself"
          },
          {
            "question": "How would you greet your audience and show excitement or gratitude at the beginning of an introduction in Spanish?",
            "options": [
              "Primero, quiero agradecerles por tomarse el tiempo de reunirse conmigo hoy.",
              "Buenos días, me llamo [Nombre]. Soy el nuevo [Título de Puesto] aquí.",
              "Buenos días a todos. Estoy emocionado/a de estar aquí hoy.",
              "Hola, me llamo [Nombre]. Encantado/a de conocerte!"
            ],
            "answer": "Buenos días a todos. Estoy emocionado/a de estar aquí hoy."
          },
          {
            "question": "What is the importance of sharing your name and relevant information about yourself during an introduction in Spanish?",
            "options": [
              "To show formal greeting and introduce oneself.",
              "To express gratitude before introducing oneself.",
              "To share what you do or other interesting information about yourself.",
              "To mention what you’re hoping to contribute or learn."
            ],
            "answer": "To share what you do or other interesting information about yourself."
          },
          {
            "question": "How would you mention what you’re hoping to contribute or learn during an introduction in Spanish?",
            "options": [
              "En las próximas horas, espero descubrir nuevas oportunidades de networking.",
              "Soy un/a gerente de proyecto con más de diez años de experiencia en varios sectores.",
              "Me llamo [Nombre] y actualmente vivo en [Lugar].",
              "Primero, quiero agradecerles por tomarse el tiempo de reunirse conmigo hoy. Me llamo [Nombre] y soy [Título de Puesto] en [Empresa]."
            ],
            "answer": "En las próximas horas, espero descubrir nuevas oportunidades de networking."
          },
          {
            "question": "What is the purpose of asking a question to invite conversation after introducing yourself in Spanish?",
            "options": [
              "To show respect and professionalism",
              "To express gratitude before introducing oneself.",
              "To invite further conversation and engagement.",
              "To mention what you’re hoping to contribute or learn."
            ],
            "answer": "To invite further conversation and engagement."
          },
          {
            "question": "How would you introduce yourself in a way that shows enthusiasm or excitement in Spanish?",
            "options": [
              "Primero, quiero agradecerles por tomarse el tiempo de reunirse conmigo hoy.",
              "Buenos días a todos. Estoy emocionado/a de estar aquí hoy.",
              "Hola, me llamo [Nombre]. Encantado/a de conocerte!",
              "Buenos días, me llamo [Nombre] y soy el nuevo [Título de Puesto] aquí."
            ],
            "answer": "Buenos días a todos. Estoy emocionado/a de estar aquí hoy."
          },
          {
            "question": "What does 'Estoy emocionado/a de estar aquí hoy' mean in the context of introducing yourself in Spanish?",
            "options": [
              "To start a formal introduction",
              "To express politeness after introducing oneself",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To show enthusiasm"
          },
          {
            "question": "How would you introduce yourself to a group of people in a structured manner in Spanish?",
            "options": [
              "Primero, quiero agradecerles por tomarse el tiempo de reunirse conmigo hoy. Me llamo [Nombre] y soy [Título de Puesto] en [Empresa].",
              "Buenos días a todos. Estoy emocionado/a de estar aquí hoy. Me llamo [Nombre] y actualmente vivo en [Lugar].",
              "Hola, me llamo [Nombre]. Encantado/a de conocerte!",
              "Buenos días, me llamo [Nombre] y soy el nuevo [Título de Puesto] aquí."
            ],
            "answer": "Buenos días a todos. Estoy emocionado/a de estar aquí hoy. Me llamo [Nombre] y actualmente vivo en [Lugar]."
          },
          {
            "question": "What is the difference between formal and informal introductions in Spanish?",
            "options": [
              "Formal introductions include name and job title, while informal introductions are casual and social.",
              "Formal introductions are casual, while informal introductions are formal.",
              "Formal introductions show excitement or gratitude, while informal introductions do not.",
              "Formal introductions are used in social settings, while informal introductions are used in professional settings."
            ],
            "answer": "Formal introductions include name and job title, while informal introductions are casual and social."
          },
          {
            "question": "How would you introduce a colleague or yourself to a customer or client in Spanish?",
            "options": [
              "Buenos días, me llamo [Nombre]. Soy el nuevo [Título de Puesto] aquí.",
              "Primero, quiero agradecerles por tomarse el tiempo de reunirse conmigo hoy. Me llamo [Nombre] y soy [Título de Puesto] en [Empresa].",
              "Buenos días a todos. Estoy emocionado/a de estar aquí hoy. Me llamo [Nombre] y actualmente vivo en [Lugar].",
              "Permíteme presentarle a mi colega, el director de marketing."
            ],
            "answer": "Permíteme presentarle a mi colega, el director de marketing."
          },
          {
            "question": "What is the importance of addressing the customer or client first when introducing a business colleague or yourself in Spanish?",
            "options": [
              "To show respect and professionalism",
              "To express gratitude before introducing oneself.",
              "To show enthusiasm",
              "To mention what you do or other interesting information about yourself"
            ],
            "answer": "To show respect and professionalism"
          },
          {
            "question": "How would you ask someone's name in Spanish?",
            "options": [
              "¿Cómo te llamas?",
              "Buenos días, me llamo [Nombre] y soy el nuevo [Título de Puesto] aquí.",
              "Primero, quiero agradecerles por tomarse el tiempo de reunirse conmigo hoy.",
              "Buenos días a todos. Estoy emocionado/a de estar aquí hoy."
            ],
            "answer": "¿Cómo te llamas?"
          },
          {
            "question": "How would you respond to '¿Cómo te llamas?' in Spanish?",
            "options": [
              "Me llamo [Nombre].",
              "Primero, quiero agradecerles por tomarse el tiempo de reunirse conmigo hoy.",
              "Buenos días a todos. Estoy emocionado/a de estar aquí hoy.",
              "Soy un/a gerente de proyecto con más de diez años de experiencia en varios sectores."
            ],
            "answer": "Me llamo [Nombre]."
          }
        ]
      }
    }
  ]

  const numbers = [
    {
      topic: "Numbers, Days, and Dates",
      languages: {
        english: [
          {
            "question": "How do you typically express the date in American English?",
            "options": [
              "Day + Month + Year (e.g., 25 December 2023)",
              "Month + Day + Year (e.g., December 25, 2023)",
              "Year + Month + Day (e.g., 2023 December 25)",
              "Day + Year + Month (e.g., 25 2023 December)"
            ],
            "answer": "Month + Day + Year (e.g., December 25, 2023)"
          },
          {
            "question": "What type of numbers are used when saying dates in spoken English?",
            "options": [
              "Cardinal numbers (e.g., one, two, three)",
              "Ordinal numbers (e.g., first, second, third)",
              "Both cardinal and ordinal numbers",
              "Neither cardinal nor ordinal numbers"
            ],
            "answer": "Ordinal numbers (e.g., first, second, third)"
          },
          {
            "question": "How would you say the date 'December 25, 2023' in spoken English?",
            "options": [
              "December twenty-five, twenty twenty-three",
              "December twenty-fifth, two thousand twenty-three",
              "December twenty-five, two thousand and twenty-three",
              "December the twenty-fifth, two thousand and twenty-three"
            ],
            "answer": "December the twenty-fifth, two thousand twenty-three"
          },
          {
            "question": "In British English, how is the date typically expressed?",
            "options": [
              "Month + Day + Year (e.g., December 25, 2023)",
              "Day + Month + Year (e.g., 25 December 2023)",
              "Year + Month + Day (e.g., 2023 December 25)",
              "Day + Year + Month (e.g., 25 2023 December)"
            ],
            "answer": "Day + Month + Year (e.g., 25 December 2023)"
          },
          {
            "question": "How would you write the date 'December 25, 2023' in a format to avoid confusion between American and British English?",
            "options": [
              "12/25/23",
              "25/12/23",
              "December 25, 2023",
              "25 Dec 2023"
            ],
            "answer": "December 25, 2023"
          },
          {
            "question": "What is the correct way to ask for the date in English?",
            "options": [
              "What day is it?",
              "What date is it?",
              "What is the date today?",
              "All of the above"
            ],
            "answer": "All of the above"
          },
          {
            "question": "How would you say the year '2017' in spoken English?",
            "options": [
              "Two thousand seventeen",
              "Twenty seventeen",
              "Two thousand and seventeen",
              "Twenty-one seven"
            ],
            "answer": "Twenty seventeen"
          },
          {
            "question": "In written English, how can you express the date 'December 25, 2023' using numbers only?",
            "options": [
              "12/25/23",
              "25/12/23",
              "2023/12/25",
              "All of the above"
            ],
            "answer": "12/25/23 (in American English) and 25/12/23 (in British English)"
          },
          {
            "question": "What is the correct format for writing the date with a comma in American English?",
            "options": [
              "December 25 2023",
              "December 25, 2023",
              "25 December, 2023",
              "25, December 2023"
            ],
            "answer": "December 25, 2023"
          },
          {
            "question": "How would you say the day 'Monday' in spoken English?",
            "options": [
              "/’mun.dei/",
              "/’tiu:z.dei/",
              "/’wenz.dei/",
              "/’thurz.dei/"
            ],
            "answer": "/’mun.dei/"
          },
          {
            "question": "What is the pronunciation of the ordinal number 'twenty-first'?",
            "options": [
              "twenty-first",
              "twenty-one",
              "twenty-one-th",
              "twenty first"
            ],
            "answer": "twenty-first"
          },
          {
            "question": "How do you express the year '1980' in spoken English?",
            "options": [
              "Nineteen eighty",
              "Nineteen hundred",
              "One thousand nine hundred eighty",
              "Eighteen eighty"
            ],
            "answer": "Nineteen eighty"
          },
          {
            "question": "What is the correct way to write the date 'August 14th' in American English with a month name and day?",
            "options": [
              "August 14, 2023",
              "14 August, 2023",
              "August the fourteenth, 2023",
              "The fourteenth of August, 2023"
            ],
            "answer": "August 14, 2023"
          },
          {
            "question": "How would you ask someone about their plans for a specific date in English?",
            "options": [
              "What are your plans for the summer?",
              "What are you doing on August 14th?",
              "Do you have any plans for today?",
              "All of the above"
            ],
            "answer": "All of the above"
          },
          {
            "question": "What is the difference in date format between American and British English when using numbers only?",
            "options": [
              "MM/DD/YYYY (American) vs. DD/MM/YYYY (British)",
              "DD/MM/YYYY (American) vs. MM/DD/YYYY (British)",
              "YYYY/MM/DD (American) vs. YYYY/DD/MM (British)",
              "None of the above"
            ],
            "answer": "MM/DD/YYYY (American) vs. DD/MM/YYYY (British)"
          },
          {
            "question": "How do you express the year '1500' in spoken English?",
            "options": [
              "Fifteen hundred",
              "One thousand five hundred",
              "Fifty hundred",
              "Five thousand"
            ],
            "answer": "Fifteen hundred"
          },
          {
            "question": "In what context would you use the phrase 'on the seventh' when talking about dates?",
            "options": [
              "When specifying a month is not necessary because it is the current month.",
              "When specifying a year is not necessary because it is the current year.",
              "When talking about a specific holiday.",
              "When writing the date in full form."
            ],
            "answer": "When specifying a month is not necessary because it is the current month."
          },
          {
            "question": "How would you pronounce the ordinal number 'thirtieth'?",
            "options": [
              "Thir-tee-th",
              "Thir-tee",
              "Thir-ty",
              "Thir-tee-eth"
            ],
            "answer": "Thir-tee-th"
          },
          {
            "question": "What is the correct format for writing the date 'August 14, 2023' with abbreviations?",
            "options": [
              "Aug 14, 2023",
              "14 Aug, 2023",
              "August the fourteenth, 2023",
              "The fourteenth of August, 2023"
            ],
            "answer": "Aug 14, 2023"
          },
          {
            "question": "How do you express the year '2010' in spoken English?",
            "options": [
              "Twenty ten",
              "Two thousand ten",
              "Twenty-one ten",
              "Two thousand and ten"
            ],
            "answer": "Twenty ten"
          }
        ],
        hausa: [
          {
            "question": "What is the Hausa word for the number 5?",
            "options": [
              "Biyu",
              "Uku",
              "Hudu",
              "Biyar"
            ],
            "answer": "Biyar"
          },
          {
            "question": "What is the meaning of 'Litinin' in Hausa?",
            "options": [
              "The second day of the week",
              "The third day of the week",
              "The first day of the week",
              "The last day of the week"
            ],
            "answer": "The first day of the week"
          },
          {
            "question": "How would you express the date 'October 5, 2023' in Hausa?",
            "options": [
              "Yau yana janairu rana 5, 2023",
              "Yau yana oktoba rana 5, 2023",
              "Shawara ta zama a ranar nobemba 15",
              "Wananni na zama a ranar disemba 25"
            ],
            "answer": "Yau yana oktoba rana 5, 2023"
          },
          {
            "question": "What is the Hausa word for the number 8?",
            "options": [
              "Tara",
              "Takwas",
              "Bakwai",
              "Shida"
            ],
            "answer": "Takwas"
          },
          {
            "question": "Which day of the week comes after Wednesday in Hausa?",
            "options": [
              "Alhamis",
              "Juma'a",
              "Asabar",
              "Lahadi"
            ],
            "answer": "Alhamis"
          },
          {
            "question": "How would you express a future date, such as a meeting scheduled for November 15th, in Hausa?",
            "options": [
              "Shawara ta zama a ranar nobemba 15",
              "Wananni na zama a ranar disemba 25",
              "Yau yana oktoba rana 5, 2023",
              "Jiya ta zama a ranar oktoba 5"
            ],
            "answer": "Shawara ta zama a ranar nobemba 15"
          },
          {
            "question": "What is the Hausa word for the number 3?",
            "options": [
              "Biyu",
              "Uku",
              "Hudu",
              "Biyar"
            ],
            "answer": "Uku"
          },
          {
            "question": "Which day of the week is the seventh day in Hausa?",
            "options": [
              "Asabar",
              "Lahadi",
              "Litinin",
              "Talata"
            ],
            "answer": "Lahadi"
          },
          {
            "question": "How would you express your birthday date, such as December 25th, in Hausa?",
            "options": [
              "Wananni na zama a ranar disemba 25",
              "Shawara ta zama a ranar nobemba 15",
              "Yau yana oktoba rana 5, 2023",
              "Jiya ta zama a ranar oktoba 5"
            ],
            "answer": "Wananni na zama a ranar disemba 25"
          },
          {
            "question": "What is the Hausa word for the number 10?",
            "options": [
              "Tara",
              "Goma",
              "Bakwai",
              "Shida"
            ],
            "answer": "Goma"
          },
          {
            "question": "Which day of the week comes before Friday in Hausa?",
            "options": [
              "Alhamis",
              "Juma'a",
              "Asabar",
              "Lahadi"
            ],
            "answer": "Alhamis"
          },
          {
            "question": "How do you ask for the date in Hausa?",
            "options": [
              "Wace rana ce yau?",
              "Yau yana oktoba rana 5, 2023",
              "Shawara ta zama a ranar nobemba 15",
              "Wananni na zama a ranar disemba 25"
            ],
            "answer": "Wace rana ce yau?"
          },
          {
            "question": "What is the Hausa word for the number 6?",
            "options": [
              "Bakwai",
              "Shida",
              "Takwas",
              "Tara"
            ],
            "answer": "Shida"
          },
          {
            "question": "Which day of the week is the third day in Hausa?",
            "options": [
              "Talata",
              "Laraba",
              "Alhamis",
              "Juma'a"
            ],
            "answer": "Laraba"
          },
          {
            "question": "How would you express today's date if it is October 5, 2023, in Hausa?",
            "options": [
              "Shawara ta zama a ranar nobemba 15",
              "Wananni na zama a ranar disemba 25",
              "Yau yana oktoba rana 5, 2023",
              "Jiya ta zama a ranar oktoba 5"
            ],
            "answer": "Yau yana oktoba rana 5, 2023"
          },
          {
            "question": "What is the Hausa word for the number 9?",
            "options": [
              "Takwas",
              "Tara",
              "Bakwai",
              "Shida"
            ],
            "answer": "Tara"
          },
          {
            "question": "Which day of the week is the sixth day in Hausa?",
            "options": [
              "Asabar",
              "Lahadi",
              "Litinin",
              "Talata"
            ],
            "answer": "Asabar"
          },
          {
            "question": "How would you express a past date, such as a meeting that was on October 5, 2023, in Hausa?",
            "options": [
              "Shawara ta zama a ranar oktoba 5",
              "Yau yana oktoba rana 5, 2023",
              "Jiya ta zama a ranar oktoba 5",
              "Wananni na zama a ranar disemba 25"
            ],
            "answer": "Shawara ta zama a ranar oktoba 5"
          },
          {
            "question": "What is the Hausa word for the number 1?",
            "options": [
              "Biyu",
              "Uku",
              "Hudu",
              "Daya"
            ],
            "answer": "Daya"
          },
          {
            "question": "Which day of the week comes after Tuesday in Hausa?",
            "options": [
              "Laraba",
              "Alhamis",
              "Juma'a",
              "Asabar"
            ],
            "answer": "Laraba"
          },
          {
            "question": "How do you say 'yesterday' in Hausa?",
            "options": [
              "Jiya",
              "Gobe",
              "Yau",
              "Ina jima"
            ],
            "answer": "Jiya"
          },
          {
            "question": "What is the Hausa word for the number 7?",
            "options": [
              "Shida",
              "Bakwai",
              "Takwas",
              "Tara"
            ],
            "answer": "Bakwai"
          }
        ],
        french: [
          {
            "question": "What is the French word for the number 'One'?",
            "options": [
              "Un",
              "Deux",
              "Trois",
              "Quatre"
            ],
            "answer": "Un"
          },
          {
            "question": "How do you say 'Monday' in French?",
            "options": [
              "Lundi",
              "Mardi",
              "Mercredi",
              "Jeudi"
            ],
            "answer": "Lundi"
          },
          {
            "question": "What is the correct way to write the day 'Monday' in a sentence in French?",
            "options": [
              "Le Lundi",
              "Lundi",
              "LE lundi",
              "le LUNDI"
            ],
            "answer": "Lundi"
          },
          {
            "question": "How do you express the date 'October 5, 2023' in French?",
            "options": [
              "Aujourd'hui, nous sommes le 5 octobre 2023",
              "La réunion aura lieu le 15 novembre",
              "Mon anniversaire est le 25 décembre",
              "Demain, nous sommes le 6 octobre 2023"
            ],
            "answer": "Aujourd'hui, nous sommes le 5 octobre 2023"
          },
          {
            "question": "What phrase do you use to indicate that an event will take place on a specific date in French?",
            "options": [
              "La réunion aura lieu le 15 novembre",
              "Mon anniversaire est le 25 décembre",
              "Aujourd'hui, nous sommes le 5 octobre 2023",
              "Demain, nous sommes le 6 octobre 2023"
            ],
            "answer": "La réunion aura lieu le 15 novembre"
          },
          {
            "question": "How do you say 'The meeting is on November 15th' in French?",
            "options": [
              "La réunion aura lieu le 15 novembre",
              "Mon anniversaire est le 25 décembre",
              "Aujourd'hui, nous sommes le 5 octobre 2023",
              "Demain, nous sommes le 6 octobre 2023"
            ],
            "answer": "La réunion aura lieu le 15 novembre"
          },
          {
            "question": "What is the French word for the number 'Five'?",
            "options": [
              "Un",
              "Deux",
              "Trois",
              "Cinq"
            ],
            "answer": "Cinq"
          },
          {
            "question": "How do you say 'Sunday' in French?",
            "options": [
              "Lundi",
              "Mardi",
              "Mercredi",
              "Dimanche"
            ],
            "answer": "Dimanche"
          },
          {
            "question": "What is the correct way to express that you do something every Monday in French?",
            "options": [
              "Le lundi, je vais voir mes parents.",
              "Lundi, je vais voir mes parents.",
              "Tous les lundis, je vais voir mes parents.",
              "Chaque lundi, je vais voir mes parents."
            ],
            "answer": "Le lundi, je vais voir mes parents."
          },
          {
            "question": "How do you ask which day of the week it is today in French?",
            "options": [
              "On est quel jour aujourd'hui?",
              "Quel jour sommes-nous aujourd'hui?",
              "Quelle date sommes-nous aujourd'hui?",
              "Quel jour est-ce aujourd'hui?"
            ],
            "answer": "On est quel jour aujourd'hui?"
          },
          {
            "question": "What phrase do you use to express that your birthday is on December 25th in French?",
            "options": [
              "Mon anniversaire est le 25 décembre",
              "La réunion aura lieu le 15 novembre",
              "Aujourd'hui, nous sommes le 5 octobre 2023",
              "Demain, nous sommes le 6 octobre 2023"
            ],
            "answer": "Mon anniversaire est le 25 décembre"
          },
          {
            "question": "How do you say 'The days of the week are written in lowercase' in French?",
            "options": [
              "Les jours de la semaine s'écrivent avec une minuscule.",
              "Les jours de la semaine s'écrivent avec une majuscule.",
              "Les jours de la semaine sont des noms communs.",
              "Les jours de la semaine sont des noms propres."
            ],
            "answer": "Les jours de la semaine s'écrivent avec une minuscule."
          },
          {
            "question": "What is the French word for the number 'Eight'?",
            "options": [
              "Un",
              "Deux",
              "Trois",
              "Huit"
            ],
            "answer": "Huit"
          },
          {
            "question": "How do you express that you work every Saturday in French?",
            "options": [
              "Le samedi, je travaille.",
              "Samedi, je travaille.",
              "Tous les samedis, je travaille.",
              "Chaque samedi, je travaille."
            ],
            "answer": "Le samedi, je travaille."
          },
          {
            "question": "What phrase do you use to indicate that something happens frequently, like every Wednesday, in French?",
            "options": [
              "Tous les mercredis",
              "Le mercredi",
              "Mercredi",
              "Chaque mercredi"
            ],
            "answer": "Tous les mercredis"
          },
          {
            "question": "How do you say 'Today is October 5, 2023' in French?",
            "options": [
              "Aujourd'hui, nous sommes le 5 octobre 2023",
              "Demain, nous sommes le 6 octobre 2023",
              "Hier, nous étions le 4 octobre 2023",
              "La réunion aura lieu le 15 novembre"
            ],
            "answer": "Aujourd'hui, nous sommes le 5 octobre 2023"
          },
          {
            "question": "What is the correct way to write the day 'Thursday' in a sentence when indicating a regular event in French?",
            "options": [
              "Le jeudi",
              "Jeudi",
              "LE jeudi",
              "le JEUDI"
            ],
            "answer": "Le jeudi"
          },
          {
            "question": "How do you ask which day of the week it is today in a formal way in French?",
            "options": [
              "On est quel jour aujourd'hui?",
              "Quel jour sommes-nous aujourd'hui?",
              "Quelle date sommes-nous aujourd'hui?",
              "Quel jour est-ce aujourd'hui?"
            ],
            "answer": "Quel jour sommes-nous aujourd'hui?"
          },
          {
            "question": "What phrase do you use to express that you have a meeting on November 15th in French?",
            "options": [
              "La réunion aura lieu le 15 novembre",
              "Mon anniversaire est le 25 décembre",
              "Aujourd'hui, nous sommes le 5 octobre 2023",
              "Demain, nous sommes le 6 octobre 2023"
            ],
            "answer": "La réunion aura lieu le 15 novembre"
          }
        ],
        spanish: [
          {
            "question": "What is the Spanish word for the number 'One'?",
            "options": [
              "Uno",
              "Dos",
              "Tres",
              "Cuatro"
            ],
            "answer": "Uno"
          },
          {
            "question": "How do you say 'Monday' in Spanish?",
            "options": [
              "Lunes",
              "Martes",
              "Miércoles",
              "Jueves"
            ],
            "answer": "Lunes"
          },
          {
            "question": "What is the correct way to express the date 'October 5, 2023' in Spanish?",
            "options": [
              "Hoy es 5 de octubre de 2023",
              "La reunión es el 15 de noviembre",
              "Mi cumpleaños es el 25 de diciembre",
              "Hoy es el 5 de octubre del 2023"
            ],
            "answer": "Hoy es 5 de octubre de 2023"
          },
          {
            "question": "How do you say 'The meeting is on November 15th' in Spanish?",
            "options": [
              "La reunión es el 15 de noviembre",
              "Mi cumpleaños es el 25 de diciembre",
              "Hoy es 5 de octubre de 2023",
              "La reunión será el 15 de noviembre"
            ],
            "answer": "La reunión es el 15 de noviembre"
          },
          {
            "question": "What is the Spanish word for the number 'Five'?",
            "options": [
              "Uno",
              "Dos",
              "Tres",
              "Cinco"
            ],
            "answer": "Cinco"
          },
          {
            "question": "How do you say 'Sunday' in Spanish?",
            "options": [
              "Lunes",
              "Martes",
              "Miércoles",
              "Domingo"
            ],
            "answer": "Domingo"
          },
          {
            "question": "What phrase do you use to indicate that today is October 5, 2023, in Spanish?",
            "options": [
              "Hoy es 5 de octubre de 2023",
              "Hoy es el 5 de octubre del 2023",
              "La reunión es el 15 de noviembre",
              "Mi cumpleaños es el 25 de diciembre"
            ],
            "answer": "Hoy es 5 de octubre de 2023"
          },
          {
            "question": "How do you express that your birthday is on December 25th in Spanish?",
            "options": [
              "Mi cumpleaños es el 25 de diciembre",
              "La reunión es el 15 de noviembre",
              "Hoy es 5 de octubre de 2023",
              "Mi cumpleaños será el 25 de diciembre"
            ],
            "answer": "Mi cumpleaños es el 25 de diciembre"
          },
          {
            "question": "What is the correct way to write the day 'Thursday' in a sentence in Spanish?",
            "options": [
              "Jueves",
              "El jueves",
              "EL JUEVES",
              "el JUEVES"
            ],
            "answer": "El jueves"
          },
          {
            "question": "How do you ask which day of the week it is today in Spanish?",
            "options": [
              "¿Qué día de la semana es hoy?",
              "¿Qué fecha es hoy?",
              "¿Cuál es el día de la semana hoy?",
              "¿Qué día es hoy?"
            ],
            "answer": "¿Qué día de la semana es hoy?"
          },
          {
            "question": "What phrase do you use to express that you work every Saturday in Spanish?",
            "options": [
              "El sábado, trabajo.",
              "Sábado, trabajo.",
              "Todas las sábados, trabajo.",
              "Cada sábado, trabajo."
            ],
            "answer": "El sábado, trabajo."
          },
          {
            "question": "How do you express that something happens frequently, like every Wednesday, in Spanish?",
            "options": [
              "Todos los miércoles",
              "El miércoles",
              "Miércoles",
              "Cada miércoles"
            ],
            "answer": "Todos los miércoles"
          },
          {
            "question": "What is the Spanish word for the number 'Eight'?",
            "options": [
              "Uno",
              "Dos",
              "Tres",
              "Ocho"
            ],
            "answer": "Ocho"
          },
          {
            "question": "How do you ask if someone has a meeting on a specific date in Spanish?",
            "options": [
              "¿Tienes una reunión el 15 de noviembre?",
              "¿Cuál es la fecha de tu reunión?",
              "¿Tienes una reunión hoy?",
              "¿Cuándo es tu reunión?"
            ],
            "answer": "¿Tienes una reunión el 15 de noviembre?"
          },
          {
            "question": "What phrase do you use to indicate that you do something every Friday in Spanish?",
            "options": [
              "El viernes, hago esto.",
              "Viernes, hago esto.",
              "Todos los viernes, hago esto.",
              "Cada viernes, hago esto."
            ],
            "answer": "El viernes, hago esto."
          },
          {
            "question": "How do you say 'The days of the week are written in lowercase' in Spanish?",
            "options": [
              "Los días de la semana se escriben con minúscula.",
              "Los días de la semana se escriben con mayúscula.",
              "Los días de la semana son nombres comunes.",
              "Los días de la semana son nombres propios."
            ],
            "answer": "Los días de la semana se escriben con minúscula."
          },
          {
            "question": "What phrase do you use to ask which day of the week it is today in a formal way in Spanish?",
            "options": [
              "¿Qué día de la semana es hoy?",
              "¿Cuál es el día de la semana hoy?",
              "¿Qué fecha es hoy?",
              "¿Qué día es hoy?"
            ],
            "answer": "¿Cuál es el día de la semana hoy?"
          },
          {
            "question": "How do you express that a meeting will take place on November 15th in Spanish?",
            "options": [
              "La reunión es el 15 de noviembre",
              "La reunión será el 15 de noviembre",
              "La reunión tendrá lugar el 15 de noviembre",
              "La reunión ocurrirá el 15 de noviembre"
            ],
            "answer": "La reunión es el 15 de noviembre"
          }
        ]
      }
    }
  ]

  const polite = [
    {
      topic: "Polite Phrases",
      languages: {
        english: [
          {
            "question": "What is a common greeting to ask about someone's well-being in English?",
            "options": [
              "Hello, how are you?",
              "Good morning, good afternoon, good evening",
              "Thank you",
              "I'm sorry"
            ],
            "answer": "Hello, how are you?"
          },
          {
            "question": "How do you formally greet someone at different times of the day in English?",
            "options": [
              "Hello, how are you?",
              "Good morning, good afternoon, good evening",
              "Thank you",
              "I'm sorry"
            ],
            "answer": "Good morning, good afternoon, good evening"
          },
          {
            "question": "What is a common expression of gratitude in English?",
            "options": [
              "Thank you",
              "I appreciate it",
              "You're welcome",
              "I'm sorry"
            ],
            "answer": "Thank you"
          },
          {
            "question": "How do you show appreciation for something in English?",
            "options": [
              "Thank you",
              "I appreciate it",
              "You're welcome",
              "I'm sorry"
            ],
            "answer": "I appreciate it"
          },
          {
            "question": "What is the typical response to 'thank you' in English?",
            "options": [
              "Thank you",
              "I appreciate it",
              "You're welcome",
              "I'm sorry"
            ],
            "answer": "You're welcome"
          },
          {
            "question": "What phrase do you use to apologize for a mistake or wrongdoing in English?",
            "options": [
              "I'm sorry",
              "Excuse me",
              "Please forgive me",
              "Thank you"
            ],
            "answer": "I'm sorry"
          },
          {
            "question": "How do you apologize for interrupting or to get someone's attention in English?",
            "options": [
              "I'm sorry",
              "Excuse me",
              "Please forgive me",
              "Thank you"
            ],
            "answer": "Excuse me"
          },
          {
            "question": "What is a formal apology for a serious mistake in English?",
            "options": [
              "I'm sorry",
              "Excuse me",
              "Please forgive me",
              "Thank you"
            ],
            "answer": "Please forgive me"
          },
          {
            "question": "How do you make a polite request for assistance in English?",
            "options": [
              "Could you please help me?",
              "May I ask a question?",
              "Would you mind if I...?",
              "Thank you"
            ],
            "answer": "Could you please help me?"
          },
          {
            "question": "What phrase do you use to ask a question politely in English?",
            "options": [
              "Could you please help me?",
              "May I ask a question?",
              "Would you mind if I...?",
              "Thank you"
            ],
            "answer": "May I ask a question?"
          },
          {
            "question": "How do you ask for permission politely in English?",
            "options": [
              "Could you please help me?",
              "May I ask a question?",
              "Would you mind if I...?",
              "Thank you"
            ],
            "answer": "Would you mind if I...?"
          },
          {
            "question": "What is a common way to greet someone and ask about their well-being in a single phrase in English?",
            "options": [
              "Hello, how are you?",
              "Good morning, good afternoon, good evening",
              "Thank you",
              "I'm sorry"
            ],
            "answer": "Hello, how are you?"
          },
          {
            "question": "How do you express gratitude and specify what you are thankful for in English?",
            "options": [
              "Thank you",
              "I appreciate it",
              "You're welcome",
              "Thanks for the help."
            ],
            "answer": "Thanks for the help."
          },
          {
            "question": "What phrase do you use to apologize and show regret in a formal situation in English?",
            "options": [
              "I'm sorry",
              "Excuse me",
              "Please forgive me",
              "I regret what happened."
            ],
            "answer": "Please forgive me"
          },
          {
            "question": "How do you make a polite request while acknowledging the other person's busy schedule in English?",
            "options": [
              "Could you please help me?",
              "May I ask a question?",
              "Would you mind if I...?",
              "If you're not busy, could you help me?"
            ],
            "answer": "If you're not busy, could you help me?"
          },
          {
            "question": "What phrase do you use to show appreciation and be specific about what you are thankful for in English?",
            "options": [
              "Thank you",
              "I appreciate it",
              "You're welcome",
              "Thanks for dinner."
            ],
            "answer": "Thanks for dinner."
          },
          {
            "question": "How do you politely get someone's attention without interrupting in English?",
            "options": [
              "I'm sorry",
              "Excuse me",
              "Excuse me, may I interrupt?",
              "Excuse me, could I ask something?"
            ],
            "answer": "Excuse me"
          },
          {
            "question": "What phrase do you use to ask for permission in a very polite and considerate way in English?",
            "options": [
              "Could you please help me?",
              "May I ask a question?",
              "Would you mind if I...?",
              "Would you be so kind as to let me...?"
            ],
            "answer": "Would you be so kind as to let me...?"
          },
          {
            "question": "How do you respond to 'thank you' in a more formal or polite manner in English?",
            "options": [
              "You're welcome",
              "Thank you",
              "I appreciate it",
              "It was my pleasure."
            ],
            "answer": "It was my pleasure."
          },
          {
            "question": "What phrase do you use to apologize and seek forgiveness in a sincere manner in English?",
            "options": [
              "I'm sorry",
              "Excuse me",
              "Please forgive me",
              "I apologize for my mistake."
            ],
            "answer": "I apologize for my mistake."
          }
        ],
        hausa: [
          {
            "question": "What is the meaning of 'Sannu, yaya ku?' in Hausa?",
            "options": [
              "Good morning, good afternoon, good evening",
              "Hello, how are you?",
              "Thank you",
              "I'm sorry"
            ],
            "answer": "Hello, how are you?"
          },
          {
            "question": "How would you greet someone in the morning, afternoon, and evening in Hausa?",
            "options": [
              "Sannu, yaya ku?",
              "Sannu kwana, sannu rana, sannu yamma",
              "Na gode",
              "Ina godiya"
            ],
            "answer": "Sannu kwana, sannu rana, sannu yamma"
          },
          {
            "question": "What is the Hausa phrase for 'Thank you'?",
            "options": [
              "Na gode",
              "Ina godiya",
              "Kada ku",
              "Sannu, yaya ku?"
            ],
            "answer": "Na gode"
          },
          {
            "question": "How would you express appreciation in Hausa?",
            "options": [
              "Na gode",
              "Ina godiya",
              "Kada ku",
              "Sannu, yaya ku?"
            ],
            "answer": "Ina godiya"
          },
          {
            "question": "What is the response to 'Thank you' in Hausa?",
            "options": [
              "Na gode",
              "Ina godiya",
              "Kada ku",
              "Sannu, yaya ku?"
            ],
            "answer": "Kada ku"
          },
          {
            "question": "How would you apologize for a mistake or wrongdoing in Hausa?",
            "options": [
              "Na yi kuskure",
              "A'a, a'a",
              "Ka ce ku gafarta",
              "Sannu, yaya ku?"
            ],
            "answer": "Na yi kuskure"
          },
          {
            "question": "What is the meaning of 'A'a, a'a' in Hausa?",
            "options": [
              "I'm sorry",
              "Excuse me",
              "Please forgive me",
              "Hello, how are you?"
            ],
            "answer": "Excuse me"
          },
          {
            "question": "How would you formally apologize for a serious mistake in Hausa?",
            "options": [
              "Na yi kuskure",
              "A'a, a'a",
              "Ka ce ku gafarta",
              "Sannu, yaya ku?"
            ],
            "answer": "Ka ce ku gafarta"
          },
          {
            "question": "How would you politely ask for help in Hausa?",
            "options": [
              "Ko ku taimaka mini?",
              "Ina tambaya",
              "Ko ku yarda in...?",
              "Sannu, yaya ku?"
            ],
            "answer": "Ko ku taimaka mini?"
          },
          {
            "question": "What is the meaning of 'Ina tambaya' in Hausa?",
            "options": [
              "Could you please help me?",
              "May I ask a question?",
              "Would you mind if I...?",
              "Hello, how are you?"
            ],
            "answer": "May I ask a question?"
          },
          {
            "question": "How would you politely ask for permission in Hausa?",
            "options": [
              "Ko ku taimaka mini?",
              "Ina tambaya",
              "Ko ku yarda in...?",
              "Sannu, yaya ku?"
            ],
            "answer": "Ko ku yarda in...?"
          },
          {
            "question": "What is the correct way to greet someone formally in the morning, afternoon, and evening in Hausa?",
            "options": [
              "Sannu, yaya ku?",
              "Sannu kwana, sannu rana, sannu yamma",
              "Na gode",
              "Ina godiya"
            ],
            "answer": "Sannu kwana, sannu rana, sannu yamma"
          },
          {
            "question": "How would you express gratitude and appreciation together in Hausa?",
            "options": [
              "Na gode",
              "Ina godiya",
              "Na gode, ina godiya",
              "Kada ku"
            ],
            "answer": "Na gode, ina godiya"
          },
          {
            "question": "What is the difference between 'Na gode' and 'Ina godiya' in Hausa?",
            "options": [
              "'Na gode' is formal, 'Ina godiya' is informal.",
              "'Na gode' is informal, 'Ina godiya' is formal.",
              "'Na gode' is for general gratitude, 'Ina godiya' is for specific appreciation.",
              "'Na gode' is for specific appreciation, 'Ina godiya' is for general gratitude."
            ],
            "answer": "'Na gode' is for general gratitude, 'Ina godiya' is for specific appreciation."
          },
          {
            "question": "How would you get someone's attention politely in Hausa?",
            "options": [
              "A'a, a'a",
              "Na yi kuskure",
              "Ka ce ku gafarta",
              "Sannu, yaya ku?"
            ],
            "answer": "A'a, a'a"
          },
          {
            "question": "What is the meaning of 'Kada ku' in Hausa?",
            "options": [
              "Thank you",
              "You're welcome",
              "I'm sorry",
              "Hello, how are you?"
            ],
            "answer": "You're welcome"
          },
          {
            "question": "How would you ask someone if they need help in Hausa?",
            "options": [
              "Ko ku taimaka mini?",
              "Ina tambaya",
              "Ko ku yarda in...?",
              "Sannu, yaya ku?"
            ],
            "answer": "Ko ku taimaka mini?"
          },
          {
            "question": "What is the correct way to apologize for interrupting someone in Hausa?",
            "options": [
              "Na yi kuskure",
              "A'a, a'a",
              "Ka ce ku gafarta",
              "Sannu, yaya ku?"
            ],
            "answer": "A'a, a'a"
          },
          {
            "question": "How would you formally ask for forgiveness in Hausa?",
            "options": [
              "Na yi kuskure",
              "A'a, a'a",
              "Ka ce ku gafarta",
              "Sannu, yaya ku?"
            ],
            "answer": "Ka ce ku gafarta"
          }
        ],
        french: [
          {
            "question": "What is a common greeting to ask about someone's well-being in French?",
            "options": [
              "Bonjour, comment allez-vous?",
              "Bonne journée, bonne soirée",
              "Merci",
              "Je vous remercie"
            ],
            "answer": "Bonjour, comment allez-vous?"
          },
          {
            "question": "How do you formally greet someone at different times of the day in French?",
            "options": [
              "Bonjour, comment allez-vous?",
              "Bonne journée, bonne soirée",
              "Merci",
              "Je vous remercie"
            ],
            "answer": "Bonne journée, bonne soirée"
          },
          {
            "question": "What is a common expression of gratitude in French?",
            "options": [
              "Merci",
              "Je vous remercie",
              "De rien",
              "Je suis désolé(e)"
            ],
            "answer": "Merci"
          },
          {
            "question": "How do you show appreciation for something in French?",
            "options": [
              "Merci",
              "Je vous remercie",
              "De rien",
              "Je suis désolé(e)"
            ],
            "answer": "Je vous remercie"
          },
          {
            "question": "What is the typical response to 'thank you' in French?",
            "options": [
              "Merci",
              "Je vous remercie",
              "De rien",
              "Je suis désolé(e)"
            ],
            "answer": "De rien"
          },
          {
            "question": "What phrase do you use to apologize for a mistake or wrongdoing in French?",
            "options": [
              "Je suis désolé(e)",
              "Excusez-moi",
              "Je vous prie de m'excuser",
              "Merci"
            ],
            "answer": "Je suis désolé(e)"
          },
          {
            "question": "How do you apologize for interrupting or to get someone's attention in French?",
            "options": [
              "Je suis désolé(e)",
              "Excusez-moi",
              "Je vous prie de m'excuser",
              "Merci"
            ],
            "answer": "Excusez-moi"
          },
          {
            "question": "What is a formal apology for a serious mistake in French?",
            "options": [
              "Je suis désolé(e)",
              "Excusez-moi",
              "Je vous prie de m'excuser",
              "Merci"
            ],
            "answer": "Je vous prie de m'excuser"
          },
          {
            "question": "How do you make a polite request for assistance in French?",
            "options": [
              "Pouvez-vous m'aider?",
              "Puis-je vous demander quelque chose?",
              "Est-ce que cela vous dérange si...?",
              "Merci"
            ],
            "answer": "Pouvez-vous m'aider?"
          },
          {
            "question": "What phrase do you use to ask a question politely in French?",
            "options": [
              "Pouvez-vous m'aider?",
              "Puis-je vous demander quelque chose?",
              "Est-ce que cela vous dérange si...?",
              "Merci"
            ],
            "answer": "Puis-je vous demander quelque chose?"
          },
          {
            "question": "How do you ask for permission politely in French?",
            "options": [
              "Pouvez-vous m'aider?",
              "Puis-je vous demander quelque chose?",
              "Est-ce que cela vous dérange si...?",
              "Merci"
            ],
            "answer": "Est-ce que cela vous dérange si...?"
          },
          {
            "question": "What is the correct way to greet someone formally during the day in French?",
            "options": [
              "Bonjour, comment allez-vous?",
              "Bonne journée, bonne soirée",
              "Bonsoir, comment allez-vous?",
              "Salut, comment vas-tu?"
            ],
            "answer": "Bonjour, comment allez-vous?"
          },
          {
            "question": "How do you express gratitude and specify what you are thankful for in French?",
            "options": [
              "Merci",
              "Je vous remercie",
              "Merci pour votre aide.",
              "Je vous remercie pour tout."
            ],
            "answer": "Merci pour votre aide."
          },
          {
            "question": "What phrase do you use to apologize and show regret in a formal situation in French?",
            "options": [
              "Je suis désolé(e)",
              "Excusez-moi",
              "Je vous prie de m'excuser",
              "Je regrette ce qui s'est passé."
            ],
            "answer": "Je vous prie de m'excuser"
          },
          {
            "question": "How do you make a polite request while acknowledging the other person's busy schedule in French?",
            "options": [
              "Pouvez-vous m'aider?",
              "Puis-je vous demander quelque chose?",
              "Est-ce que cela vous dérange si...?",
              "Si vous n'êtes pas occupé, pourriez-vous m'aider?"
            ],
            "answer": "Si vous n'êtes pas occupé, pourriez-vous m'aider?"
          },
          {
            "question": "What phrase do you use to show appreciation and be specific about what you are thankful for in French?",
            "options": [
              "Merci",
              "Je vous remercie",
              "Merci pour le diner.",
              "Je vous remercie pour tout."
            ],
            "answer": "Merci pour le diner."
          },
          {
            "question": "How do you politely get someone's attention without interrupting in French?",
            "options": [
              "Je suis désolé(e)",
              "Excusez-moi",
              "Excusez-moi, puis-je vous poser une question?",
              "Excusez-moi, pourriez-vous m'aider?"
            ],
            "answer": "Excusez-moi"
          },
          {
            "question": "What phrase do you use to ask for permission in a very polite and considerate way in French?",
            "options": [
              "Pouvez-vous m'aider?",
              "Puis-je vous demander quelque chose?",
              "Est-ce que cela vous dérange si...?",
              "Pourriez-vous me permettre de...?"
            ],
            "answer": "Pourriez-vous me permettre de...?"
          },
          {
            "question": "How do you respond to 'thank you' in a more formal or polite manner in French?",
            "options": [
              "De rien",
              "Merci",
              "Je vous remercie",
              "Je vous en prie."
            ],
            "answer": "Je vous en prie."
          },
          {
            "question": "What phrase do you use to apologize and seek forgiveness in a sincere manner in French?",
            "options": [
              "Je suis désolé(e)",
              "Excusez-moi",
              "Je vous prie de m'excuser",
              "Je m'excuse sincèrement pour ma faute."
            ],
            "answer": "Je vous prie de m'excuser"
          }
        ],
        spanish:[
          {
            "question": "What is a common greeting to ask about someone's well-being in Spanish?",
            "options": [
              "Hola, ¿cómo estás?",
              "Buenos días, buenas tardes, buenas noches",
              "Gracias",
              "Te agradezco"
            ],
            "answer": "Hola, ¿cómo estás?"
          },
          {
            "question": "How do you formally greet someone at different times of the day in Spanish?",
            "options": [
              "Hola, ¿cómo estás?",
              "Buenos días, buenas tardes, buenas noches",
              "Gracias",
              "Te agradezco"
            ],
            "answer": "Buenos días, buenas tardes, buenas noches"
          },
          {
            "question": "What is a common expression of gratitude in Spanish?",
            "options": [
              "Gracias",
              "Te agradezco",
              "De nada",
              "Lo siento"
            ],
            "answer": "Gracias"
          },
          {
            "question": "How do you show appreciation for something in Spanish?",
            "options": [
              "Gracias",
              "Te agradezco",
              "De nada",
              "Lo siento"
            ],
            "answer": "Te agradezco"
          },
          {
            "question": "What is the typical response to 'thank you' in Spanish?",
            "options": [
              "Gracias",
              "Te agradezco",
              "De nada",
              "Lo siento"
            ],
            "answer": "De nada"
          },
          {
            "question": "What phrase do you use to apologize for a mistake or wrongdoing in Spanish?",
            "options": [
              "Lo siento",
              "Disculpa",
              "Por favor, discúlpame",
              "Gracias"
            ],
            "answer": "Lo siento"
          },
          {
            "question": "How do you apologize for interrupting or to get someone's attention in Spanish?",
            "options": [
              "Lo siento",
              "Disculpa",
              "Por favor, discúlpame",
              "Gracias"
            ],
            "answer": "Disculpa"
          },
          {
            "question": "What is a formal apology for a serious mistake in Spanish?",
            "options": [
              "Lo siento",
              "Disculpa",
              "Por favor, discúlpame",
              "Gracias"
            ],
            "answer": "Por favor, discúlpame"
          },
          {
            "question": "How do you make a polite request for assistance in Spanish?",
            "options": [
              "¿Puedes ayudarme?",
              "¿Puedo preguntar algo?",
              "¿Te importaría si...?",
              "Gracias"
            ],
            "answer": "¿Puedes ayudarme?"
          },
          {
            "question": "What phrase do you use to ask a question politely in Spanish?",
            "options": [
              "¿Puedes ayudarme?",
              "¿Puedo preguntar algo?",
              "¿Te importaría si...?",
              "Gracias"
            ],
            "answer": "¿Puedo preguntar algo?"
          },
          {
            "question": "How do you ask for permission politely in Spanish?",
            "options": [
              "¿Puedes ayudarme?",
              "¿Puedo preguntar algo?",
              "¿Te importaría si...?",
              "Gracias"
            ],
            "answer": "¿Te importaría si...?"
          },
          {
            "question": "What is the correct way to greet someone formally during the day in Spanish?",
            "options": [
              "Hola, ¿cómo estás?",
              "Buenos días",
              "Buenas tardes",
              "Buenas noches"
            ],
            "answer": "Buenos días"
          },
          {
            "question": "How do you express gratitude and specify what you are thankful for in Spanish?",
            "options": [
              "Gracias",
              "Te agradezco por tu ayuda.",
              "De nada",
              "Lo aprecio mucho"
            ],
            "answer": "Te agradezco por tu ayuda."
          },
          {
            "question": "What phrase do you use to apologize and show regret in a formal situation in Spanish?",
            "options": [
              "Lo siento",
              "Disculpa",
              "Por favor, discúlpame",
              "Me disculpo sinceramente"
            ],
            "answer": "Por favor, discúlpame"
          },
          {
            "question": "How do you make a polite request while acknowledging the other person's busy schedule in Spanish?",
            "options": [
              "¿Puedes ayudarme?",
              "¿Puedo preguntar algo?",
              "¿Te importaría si...?",
              "Si no estás ocupado, ¿podrías ayudarme?"
            ],
            "answer": "Si no estás ocupado, ¿podrías ayudarme?"
          },
          {
            "question": "What phrase do you use to show appreciation and be specific about what you are thankful for in Spanish?",
            "options": [
              "Gracias",
              "Te agradezco por tu ayuda.",
              "De nada",
              "Lo aprecio mucho"
            ],
            "answer": "Te agradezco por tu ayuda."
          },
          {
            "question": "How do you politely get someone's attention without interrupting in Spanish?",
            "options": [
              "Lo siento",
              "Disculpa",
              "Disculpa, ¿podrías ayudarme con…?",
              "¿Puedes ayudarme?"
            ],
            "answer": "Disculpa"
          },
          {
            "question": "What phrase do you use to ask for permission in a very polite and considerate way in Spanish?",
            "options": [
              "¿Puedes ayudarme?",
              "¿Puedo preguntar algo?",
              "¿Te importaría si...?",
              "¿Me permites...?"
            ],
            "answer": "¿Me permites...?"
          },
          {
            "question": "How do you respond to 'thank you' in a more formal or polite manner in Spanish?",
            "options": [
              "De nada",
              "Gracias",
              "Te agradezco",
              "Por nada, fue un placer"
            ],
            "answer": "Por nada, fue un placer"
          },
          {
            "question": "What phrase do you use to apologize and seek forgiveness in a sincere manner in Spanish?",
            "options": [
              "Lo siento",
              "Disculpa",
              "Por favor, discúlpame",
              "Me disculpo sinceramente por mi error"
            ],
            "answer": "Me disculpo sinceramente por mi error"
          }
        ]
      }
    }
  ]

  const emergency = [
    {
      topic: "Emergency Situations",
      languages: {
        english: [
          {
            "question": "What is the meaning of 'Help!' in an emergency situation in English?",
            "options": [
              "A general call for medical assistance",
              "A general call for police assistance",
              "A general call for fire department assistance",
              "A general call for help"
            ],
            "answer": "A general call for help"
          },
          {
            "question": "How would you instruct someone to call the emergency services in the USA or Canada?",
            "options": [
              "Call 999",
              "Call 112",
              "Call 911",
              "Call the local police station"
            ],
            "answer": "Call 911"
          },
          {
            "question": "What is the English phrase to request immediate medical assistance?",
            "options": [
              "I need the police!",
              "I need a firetruck!",
              "I need an ambulance!",
              "There's been an accident!"
            ],
            "answer": "I need an ambulance!"
          },
          {
            "question": "How would you report an accident in English?",
            "options": [
              "Someone is injured!",
              "There's a fire!",
              "I'm lost!",
              "There's been an accident!"
            ],
            "answer": "There's been an accident!"
          },
          {
            "question": "What is the English phrase to report a fire?",
            "options": [
              "There's been an accident!",
              "Someone is injured!",
              "I'm lost!",
              "There's a fire!"
            ],
            "answer": "There's a fire!"
          },
          {
            "question": "How would you ask for police assistance in an emergency situation in English?",
            "options": [
              "I need an ambulance!",
              "I need a firetruck!",
              "I need the police!",
              "There's been an accident!"
            ],
            "answer": "I need the police!"
          },
          {
            "question": "What is the meaning of 'There's a fire!' in English?",
            "options": [
              "Someone is injured!",
              "There's been an accident!",
              "I'm lost!",
              "There's a fire!"
            ],
            "answer": "There's a fire!"
          },
          {
            "question": "How would you report being lost in English?",
            "options": [
              "I've been robbed!",
              "There's been an accident!",
              "Someone is injured!",
              "I'm lost!"
            ],
            "answer": "I'm lost!"
          },
          {
            "question": "What is the English phrase to request immediate assistance?",
            "options": [
              "Please send help tomorrow!",
              "Please send help immediately!",
              "I need an ambulance!",
              "There's been an accident!"
            ],
            "answer": "Please send help immediately!"
          },
          {
            "question": "How would you ask for a doctor in an emergency situation in English?",
            "options": [
              "I need an ambulance!",
              "I need the police!",
              "I need a firetruck!",
              "I need a doctor!"
            ],
            "answer": "I need a doctor!"
          },
          {
            "question": "How would you provide your location information during an emergency in English?",
            "options": [
              "My location is [Location]",
              "I'm lost!",
              "There's been an accident!",
              "Someone is injured!"
            ],
            "answer": "My location is [Location]"
          },
          {
            "question": "What is the meaning of '911' in the context of emergency services in the USA or Canada?",
            "options": [
              "The number for the police",
              "The number for the fire department",
              "The universal emergency number",
              "The number for medical aid"
            ],
            "answer": "The universal emergency number"
          },
          {
            "question": "How would you report a robbery in English?",
            "options": [
              "I've been robbed!",
              "There's been an accident!",
              "Someone is injured!",
              "I'm lost!"
            ],
            "answer": "I've been robbed!"
          },
          {
            "question": "How would you ask for a firetruck in an emergency situation in English?",
            "options": [
              "I need an ambulance!",
              "I need the police!",
              "I need a firetruck!",
              "There's been an accident!"
            ],
            "answer": "I need a firetruck!"
          },
          {
            "question": "What is the meaning of 'There's been an accident!' in English?",
            "options": [
              "Someone is injured!",
              "There's a fire!",
              "I'm lost!",
              "There's been an accident!"
            ],
            "answer": "There's been an accident!"
          },
          {
            "question": "How would you report someone being injured in English?",
            "options": [
              "There's been an accident!",
              "There's a fire!",
              "I'm lost!",
              "Someone is injured!"
            ],
            "answer": "Someone is injured!"
          },
          {
            "question": "How would you ask someone if they are okay in an emergency situation in English?",
            "options": [
              "Are you okay?",
              "Is everyone okay?",
              "I need a doctor!",
              "Please send help immediately!"
            ],
            "answer": "Are you okay?"
          },
          {
            "question": "What is the meaning of 'Call 911' in the context of emergency services?",
            "options": [
              "Call the local police station",
              "Call the fire department",
              "Call the ambulance service",
              "Call the universal emergency number"
            ],
            "answer": "Call the universal emergency number"
          },
          {
            "question": "How would you ask for immediate police assistance in English?",
            "options": [
              "Call the police!",
              "Call an ambulance!",
              "Call a firetruck!",
              "Call 911!"
            ],
            "answer": "Call the police!"
          },
          {
            "question": "What is the meaning of 'I'm lost!' in English?",
            "options": [
              "I've been robbed!",
              "There's been an accident!",
              "Someone is injured!",
              "I'm lost!"
            ],
            "answer": "I'm lost!"
          },
          {
            "question": "How would you provide specific location information during an emergency in English?",
            "options": [
              "I'm lost!",
              "There's been an accident!",
              "Someone is injured!",
              "My location is [Location]"
            ],
            "answer": "My location is [Location]"
          }
        ],
        hausa: [
          {
            "question": "What is a general call for help in Hausa?",
            "options": [
              "Taimako!",
              "Kira 112 (ko lambar gaggawa ta yankinku)",
              "Ina bukatar motar asibiti!",
              "Ina bukatar 'yan sanda!"
            ],
            "answer": "Taimako!"
          },
          {
            "question": "How do you instruct someone to contact emergency services in Hausa?",
            "options": [
              "Kira 112 (ko lambar gaggawa ta yankinku)",
              "Ina bukatar motar asibiti!",
              "Ina bukatar 'yan sanda!",
              "Ina bukatar jami'an kashe gobara!"
            ],
            "answer": "Kira 112 (ko lambar gaggawa ta yankinku)"
          },
          {
            "question": "What phrase do you use to request an ambulance in Hausa?",
            "options": [
              "Ina bukatar motar asibiti!",
              "Ina bukatar 'yan sanda!",
              "Ina bukatar jami'an kashe gobara!",
              "Hadari ya faru!"
            ],
            "answer": "Ina bukatar motar asibiti!"
          },
          {
            "question": "How do you request police assistance in Hausa?",
            "options": [
              "Ina bukatar 'yan sanda!",
              "Ina bukatar motar asibiti!",
              "Ina bukatar jami'an kashe gobara!",
              "Hadari ya faru!"
            ],
            "answer": "Ina bukatar 'yan sanda!"
          },
          {
            "question": "What phrase do you use to request fire department assistance in Hausa?",
            "options": [
              "Ina bukatar jami'an kashe gobara!",
              "Ina bukatar motar asibiti!",
              "Ina bukatar 'yan sanda!",
              "Hadari ya faru!"
            ],
            "answer": "Ina bukatar jami'an kashe gobara!"
          },
          {
            "question": "How do you report an accident in Hausa?",
            "options": [
              "Hadari ya faru!",
              "Wani ya ji rauni!",
              "Wuta ta tashi!",
              "Na bata!"
            ],
            "answer": "Hadari ya faru!"
          },
          {
            "question": "What phrase do you use to report an injury in Hausa?",
            "options": [
              "Wani ya ji rauni!",
              "Hadari ya faru!",
              "Wuta ta tashi!",
              "Na bata!"
            ],
            "answer": "Wani ya ji rauni!"
          },
          {
            "question": "How do you report a fire in Hausa?",
            "options": [
              "Wuta ta tashi!",
              "Hadari ya faru!",
              "Wani ya ji rauni!",
              "Na bata!"
            ],
            "answer": "Wuta ta tashi!"
          },
          {
            "question": "What phrase do you use to report being lost in Hausa?",
            "options": [
              "Na bata!",
              "Hadari ya faru!",
              "Wani ya ji rauni!",
              "Wuta ta tashi!"
            ],
            "answer": "Na bata!"
          },
          {
            "question": "How do you report a robbery in Hausa?",
            "options": [
              "An sace ni!",
              "Hadari ya faru!",
              "Wani ya ji rauni!",
              "Wuta ta tashi!"
            ],
            "answer": "An sace ni!"
          },
          {
            "question": "What phrase do you use to make an urgent request for assistance in Hausa?",
            "options": [
              "Da fatan za a taimaka mini nan take!",
              "Ina bukatar likita!",
              "Wurin da nake shine [Wuri]",
              "Hadari ya faru!"
            ],
            "answer": "Da fatan za a taimaka mini nan take!"
          },
          {
            "question": "How do you request a doctor in Hausa?",
            "options": [
              "Ina bukatar likita!",
              "Da fatan za a taimaka mini nan take!",
              "Wurin da nake shine [Wuri]",
              "Hadari ya faru!"
            ],
            "answer": "Ina bukatar likita!"
          },
          {
            "question": "What phrase do you use to provide your location in Hausa?",
            "options": [
              "Wurin da nake shine [Wuri]",
              "Da fatan za a taimaka mini nan take!",
              "Ina bukatar likita!",
              "Hadari ya faru!"
            ],
            "answer": "Wurin da nake shine [Wuri]"
          },
          {
            "question": "How do you ask someone to call the local emergency number in Hausa?",
            "options": [
              "Kira 112 (ko lambar gaggawa ta yankinku)",
              "Taimako!",
              "Ina bukatar motar asibiti!",
              "Ina bukatar 'yan sanda!"
            ],
            "answer": "Kira 112 (ko lambar gaggawa ta yankinku)"
          },
          {
            "question": "What phrase do you use to describe a situation where someone is injured in Hausa?",
            "options": [
              "Wani ya ji rauni!",
              "Hadari ya faru!",
              "Wuta ta tashi!",
              "Na bata!"
            ],
            "answer": "Wani ya ji rauni!"
          },
          {
            "question": "How do you ask for immediate help when you are lost in Hausa?",
            "options": [
              "Na bata Da fatan za a taimaka mini nan take!",
              "Na bata Kira 112",
              "Na bata Ina bukatar likita",
              "Na bata Wurin da nake shine [Wuri]"
            ],
            "answer": "Na bata Da fatan za a taimaka mini nan take!"
          },
          {
            "question": "What phrase do you use to report a robbery and request police assistance in Hausa?",
            "options": [
              "An sace ni Ina bukatar 'yan sanda!",
              "An sace ni Kira 112",
              "An sace ni Ina bukatar likita",
              "An sace ni Wurin da nake shine [Wuri]"
            ],
            "answer": "An sace ni Ina bukatar 'yan sanda!"
          },
          {
            "question": "How do you describe a fire emergency and request fire department assistance in Hausa?",
            "options": [
              "Wuta ta tashi Ina bukatar jami'an kashe gobara!",
              "Wuta ta tashi Kira 112",
              "Wuta ta tashi Ina bukatar likita",
              "Wuta ta tashi Wurin da nake shine [Wuri]"
            ],
            "answer": "Wuta ta tashi Ina bukatar jami'an kashe gobara!"
          },
          {
            "question": "What phrase do you use to provide your location and request medical help in Hausa?",
            "options": [
              "Wurin da nake shine [Wuri]. Ina bukatar likita!",
              "Wurin da nake shine [Wuri]. Kira 112",
              "Wurin da nake shine [Wuri]. Ina bukatar motar asibiti",
              "Wurin da nake shine [Wuri]. Hadari ya faru!"
            ],
            "answer": "Wurin da nake shine [Wuri]. Ina bukatar likita!"
          }
        ],
        french: [
          {
            "question": "What is the meaning of 'Au secours !' in French?",
            "options": [
              "I need an ambulance!",
              "I need the police!",
              "I need a firetruck!",
              "A general call for help"
            ],
            "answer": "A general call for help"
          },
          {
            "question": "How would you instruct someone to call the emergency services in France?",
            "options": [
              "Appelez le 15",
              "Appelez le 17",
              "Appelez le 112 (ou votre numéro d'urgence local)",
              "Appelez le 18"
            ],
            "answer": "Appelez le 112 (ou votre numéro d'urgence local)"
          },
          {
            "question": "What is the French phrase to request an ambulance?",
            "options": [
              "J'ai besoin de la police !",
              "J'ai besoin des pompiers !",
              "J'ai besoin d'une ambulance !",
              "Il y a eu un accident !"
            ],
            "answer": "J'ai besoin d'une ambulance !"
          },
          {
            "question": "How would you report an accident in French?",
            "options": [
              "Quelqu'un est blessé !",
              "Il y a un incendie !",
              "Je suis perdu(e) !",
              "Il y a eu un accident !"
            ],
            "answer": "Il y a eu un accident !"
          },
          {
            "question": "What is the French phrase to report a fire?",
            "options": [
              "Il y a eu un accident !",
              "Quelqu'un est blessé !",
              "Je suis perdu(e) !",
              "Il y a un incendie !"
            ],
            "answer": "Il y a un incendie !"
          },
          {
            "question": "How would you ask for police assistance in French?",
            "options": [
              "J'ai besoin d'une ambulance !",
              "J'ai besoin des pompiers !",
              "J'ai besoin de la police !",
              "Il y a eu un accident !"
            ],
            "answer": "J'ai besoin de la police !"
          },
          {
            "question": "What is the meaning of 'J'ai besoin de la police !' in French?",
            "options": [
              "I need an ambulance!",
              "I need a firetruck!",
              "I need the police!",
              "Someone is injured!"
            ],
            "answer": "I need the police!"
          },
          {
            "question": "How would you report being lost in French?",
            "options": [
              "Je suis perdu(e) !",
              "J'ai été volé(e) !",
              "Il y a eu un accident !",
              "Quelqu'un est blessé !"
            ],
            "answer": "Je suis perdu(e) !"
          },
          {
            "question": "What is the French phrase to request immediate help?",
            "options": [
              "Envoyez de l'aide demain !",
              "Envoyez de l'aide immédiatement !",
              "J'ai besoin d'une ambulance !",
              "Il y a un incendie !"
            ],
            "answer": "Envoyez de l'aide immédiatement !"
          },
          {
            "question": "How would you ask for a doctor in French?",
            "options": [
              "J'ai besoin d'une ambulance !",
              "J'ai besoin des pompiers !",
              "J'ai besoin de la police !",
              "J'ai besoin d'un médecin !"
            ],
            "answer": "J'ai besoin d'un médecin !"
          },
          {
            "question": "What is the meaning of '112' in the context of emergency services in France?",
            "options": [
              "The number for the police",
              "The number for the fire department",
              "The universal emergency number",
              "The number for medical aid"
            ],
            "answer": "The universal emergency number"
          },
          {
            "question": "How would you provide your location in an emergency situation in French?",
            "options": [
              "Je me trouve à [Lieu]",
              "Je suis perdu(e) !",
              "J'ai besoin d'une ambulance !",
              "Il y a un incendie !"
            ],
            "answer": "Je me trouve à [Lieu]"
          },
          {
            "question": "What is the French phrase to report a robbery?",
            "options": [
              "J'ai été volé(e) !",
              "Je suis perdu(e) !",
              "Quelqu'un est blessé !",
              "Il y a eu un accident !"
            ],
            "answer": "J'ai été volé(e) !"
          },
          {
            "question": "How would you ask for a firetruck in French?",
            "options": [
              "J'ai besoin de la police !",
              "J'ai besoin des pompiers !",
              "J'ai besoin d'une ambulance !",
              "Il y a un incendie !"
            ],
            "answer": "J'ai besoin des pompiers !"
          },
          {
            "question": "What is the meaning of 'Il y a un incendie !' in French?",
            "options": [
              "There's been an accident!",
              "Someone is injured!",
              "I'm lost!",
              "There's a fire!"
            ],
            "answer": "There's a fire!"
          },
          {
            "question": "How would you report someone being injured in French?",
            "options": [
              "Quelqu'un est blessé !",
              "Il y a eu un accident !",
              "Je suis perdu(e) !",
              "J'ai été volé(e) !"
            ],
            "answer": "Quelqu'un est blessé !"
          },
          {
            "question": "What is the emergency number for medical aid in France?",
            "options": [
              "15",
              "17",
              "18",
              "112"
            ],
            "answer": "15"
          },
          {
            "question": "How would you ask for immediate police assistance in French?",
            "options": [
              "J'ai besoin de la police demain !",
              "J'ai besoin de la police immédiatement !",
              "Appelez la police !",
              "J'ai besoin des pompiers !"
            ],
            "answer": "Appelez la police !"
          },
          {
            "question": "What is the meaning of 'Je suis perdu(e) !' in French?",
            "options": [
              "I've been robbed!",
              "I'm lost!",
              "There's been an accident!",
              "Someone is injured!"
            ],
            "answer": "I'm lost!"
          },
          {
            "question": "How would you provide specific location information during an emergency in French?",
            "options": [
              "Je suis perdu(e) !",
              "Je me trouve à [Lieu]",
              "J'ai besoin d'une ambulance !",
              "Il y a un incendie !"
            ],
            "answer": "Je me trouve à [Lieu]"
          }
        ],
        spanish: [
          {
            "question": "What is a general call for help in Spanish?",
            "options": [
              "¡Socorro!",
              "Llama al 112 (o al número de emergencias local)",
              "¡Necesito una ambulancia!",
              "¡Necesito a la policía!"
            ],
            "answer": "¡Socorro!"
          },
          {
            "question": "How do you instruct someone to contact emergency services in Spanish?",
            "options": [
              "Llama al 112 (o al número de emergencias local)",
              "¡Necesito una ambulancia!",
              "¡Necesito a la policía!",
              "¡Necesito bomberos!"
            ],
            "answer": "Llama al 112 (o al número de emergencias local)"
          },
          {
            "question": "What phrase do you use to request an ambulance in Spanish?",
            "options": [
              "¡Necesito una ambulancia!",
              "¡Necesito a la policía!",
              "¡Necesito bomberos!",
              "¡Ha habido un accidente!"
            ],
            "answer": "¡Necesito una ambulancia!"
          },
          {
            "question": "How do you request police assistance in Spanish?",
            "options": [
              "¡Necesito a la policía!",
              "¡Necesito una ambulancia!",
              "¡Necesito bomberos!",
              "¡Ha habido un accidente!"
            ],
            "answer": "¡Necesito a la policía!"
          },
          {
            "question": "What phrase do you use to request fire department assistance in Spanish?",
            "options": [
              "¡Necesito bomberos!",
              "¡Necesito una ambulancia!",
              "¡Necesito a la policía!",
              "¡Ha habido un accidente!"
            ],
            "answer": "¡Necesito bomberos!"
          },
          {
            "question": "How do you report an accident in Spanish?",
            "options": [
              "¡Ha habido un accidente!",
              "¡Alguien está herido!",
              "¡Hay un incendio!",
              "¡Estoy perdido!"
            ],
            "answer": "¡Ha habido un accidente!"
          },
          {
            "question": "What phrase do you use to report an injury in Spanish?",
            "options": [
              "¡Alguien está herido!",
              "¡Ha habido un accidente!",
              "¡Hay un incendio!",
              "¡Estoy perdido!"
            ],
            "answer": "¡Alguien está herido!"
          },
          {
            "question": "How do you report a fire in Spanish?",
            "options": [
              "¡Hay un incendio!",
              "¡Ha habido un accidente!",
              "¡Alguien está herido!",
              "¡Estoy perdido!"
            ],
            "answer": "¡Hay un incendio!"
          },
          {
            "question": "What phrase do you use to report being lost in Spanish?",
            "options": [
              "¡Estoy perdido!",
              "¡Ha habido un accidente!",
              "¡Alguien está herido!",
              "¡Hay un incendio!"
            ],
            "answer": "¡Estoy perdido!"
          },
          {
            "question": "How do you report a robbery in Spanish?",
            "options": [
              "¡Me han robado!",
              "¡Ha habido un accidente!",
              "¡Alguien está herido!",
              "¡Hay un incendio!"
            ],
            "answer": "¡Me han robado!"
          },
          {
            "question": "What phrase do you use to make an urgent request for assistance in Spanish?",
            "options": [
              "¡Por favor, envíen ayuda inmediatamente!",
              "¡Necesito un médico!",
              "Mi ubicación es [Ubicación]",
              "¡Ha habido un accidente!"
            ],
            "answer": "¡Por favor, envíen ayuda inmediatamente!"
          },
          {
            "question": "How do you request a doctor in Spanish?",
            "options": [
              "¡Necesito un médico!",
              "¡Por favor, envíen ayuda inmediatamente!",
              "Mi ubicación es [Ubicación]",
              "¡Ha habido un accidente!"
            ],
            "answer": "¡Necesito un médico!"
          },
          {
            "question": "What phrase do you use to provide your location in Spanish?",
            "options": [
              "Mi ubicación es [Ubicación]",
              "¡Por favor, envíen ayuda inmediatamente!",
              "¡Necesito un médico!",
              "¡Ha habido un accidente!"
            ],
            "answer": "Mi ubicación es [Ubicación]"
          },
          {
            "question": "How do you ask someone to call the local emergency number in Spain?",
            "options": [
              "Llama al 112",
              "Llama al 911",
              "Llama a la policía",
              "Llama a los bomberos"
            ],
            "answer": "Llama al 112"
          },
          {
            "question": "What phrase do you use to describe a situation where someone is injured in Spanish?",
            "options": [
              "¡Alguien está herido!",
              "¡Ha habido un accidente!",
              "¡Hay un incendio!",
              "¡Estoy perdido!"
            ],
            "answer": "¡Alguien está herido!"
          },
          {
            "question": "How do you ask for immediate help when you are lost in Spanish?",
            "options": [
              "¡Estoy perdido Por favor, envíen ayuda inmediatamente!",
              "¡Estoy perdido Llama al 112",
              "¡Estoy perdido Necesito un mapa",
              "¡Estoy perdido ¿Dónde estoy?"
            ],
            "answer": "¡Estoy perdido Por favor, envíen ayuda inmediatamente!"
          },
          {
            "question": "What phrase do you use to report a robbery and request police assistance in Spanish?",
            "options": [
              "¡Me han robado ¡Necesito a la policía!",
              "¡Me han robado Llama al 112",
              "¡Me han robado Necesito un abogado",
              "¡Me han robado ¿Dónde está la comisaría?"
            ],
            "answer": "¡Me han robado ¡Necesito a la policía!"
          },
          {
            "question": "How do you describe a fire emergency and request fire department assistance in Spanish?",
            "options": [
              "¡Hay un incendio ¡Necesito bomberos!",
              "¡Hay un incendio Llama al 112",
              "¡Hay un incendio Necesito un extintor",
              "¡Hay un incendio ¿Dónde está la estación de bomberos?"
            ],
            "answer": "¡Hay un incendio ¡Necesito bomberos!"
          },
          {
            "question": "What phrase do you use to provide your location and request medical help in Spanish?",
            "options": [
              "Mi ubicación es [Ubicación]. ¡Necesito un médico!",
              "Mi ubicación es [Ubicación]. Llama al 112",
              "Mi ubicación es [Ubicación]. Necesito una ambulancia",
              "Mi ubicación es [Ubicación]. ¿Dónde está el hospital más cercano?"
            ],
            "answer": "Mi ubicación es [Ubicación]. ¡Necesito un médico!"
          }
        ]
      }
    }
  ]

const narration = [
  {
    topic: "Narration",
    languages: {
      english: [
        {
          "question": "What is a common way to start a story in English?",
          "options": [
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "It was a dark and stormy night, and I was driving home from work.",
            "As I walked through the forest, I stumbled upon a hidden clearing.",
            "And so, I learned a valuable lesson that day."
          ],
          "answer": "Once upon a time, in a small village, there lived a young girl named Sarah."
        },
        {
          "question": "How do you set the scene for a story in English?",
          "options": [
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "It was a dark and stormy night, and I was driving home from work.",
            "As I walked through the forest, I stumbled upon a hidden clearing.",
            "And so, I learned a valuable lesson that day."
          ],
          "answer": "It was a dark and stormy night, and I was driving home from work."
        },
        {
          "question": "What phrase do you use to describe a sequence of events in a story in English?",
          "options": [
            "As I walked through the forest, I stumbled upon a hidden clearing.",
            "The next day, I received a call from an unknown number.",
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "And so, I learned a valuable lesson that day."
          ],
          "answer": "As I walked through the forest, I stumbled upon a hidden clearing."
        },
        {
          "question": "How do you continue the story by indicating a new day or event in English?",
          "options": [
            "The next day, I received a call from an unknown number.",
            "As I walked through the forest, I stumbled upon a hidden clearing.",
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "And so, I learned a valuable lesson that day."
          ],
          "answer": "The next day, I received a call from an unknown number."
        },
        {
          "question": "What phrase do you use to conclude a story in English?",
          "options": [
            "And so, I learned a valuable lesson that day.",
            "From that day on, I never forgot the experience.",
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "It was a dark and stormy night, and I was driving home from work."
          ],
          "answer": "And so, I learned a valuable lesson that day."
        },
        {
          "question": "How do you reflect on the story and its impact in English?",
          "options": [
            "From that day on, I never forgot the experience.",
            "And so, I learned a valuable lesson that day.",
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "It was a dark and stormy night, and I was driving home from work."
          ],
          "answer": "From that day on, I never forgot the experience."
        },
        {
          "question": "What is the purpose of the introduction in a narrative structure?",
          "options": [
            "To describe a sequence of events",
            "To conclude the story",
            "To set the scene and introduce characters",
            "To reflect on the story"
          ],
          "answer": "To set the scene and introduce characters"
        },
        {
          "question": "What is the role of the body in a narrative structure?",
          "options": [
            "To introduce the story",
            "To conclude the story",
            "To describe a sequence of events",
            "To reflect on the story"
          ],
          "answer": "To describe a sequence of events"
        },
        {
          "question": "How do you transition between different parts of the story in English?",
          "options": [
            "The next day, I received a call from an unknown number.",
            "As I walked through the forest, I stumbled upon a hidden clearing.",
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "And then, something unexpected happened."
          ],
          "answer": "The next day, I received a call from an unknown number."
        },
        {
          "question": "What phrase can be used to start a story in a more traditional or fairy tale-like manner in English?",
          "options": [
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "It was a dark and stormy night, and I was driving home from work.",
            "As I walked through the forest, I stumbled upon a hidden clearing.",
            "In the beginning, there was a young boy named Jack."
          ],
          "answer": "Once upon a time, in a small village, there lived a young girl named Sarah."
        },
        {
          "question": "How do you use transitional phrases to connect events in a story in English?",
          "options": [
            "As I walked through the forest, I stumbled upon a hidden clearing.",
            "The next day, I received a call from an unknown number.",
            "And so, I learned a valuable lesson that day.",
            "Meanwhile, back at the house..."
          ],
          "answer": "As I walked through the forest, I stumbled upon a hidden clearing."
        },
        {
          "question": "What is the purpose of the conclusion in a narrative structure?",
          "options": [
            "To introduce the story",
            "To describe a sequence of events",
            "To conclude the story and reflect on its impact",
            "To set the scene"
          ],
          "answer": "To conclude the story and reflect on its impact"
        },
        {
          "question": "How do you use the phrase 'And so' to conclude a story in English?",
          "options": [
            "And so, I learned a valuable lesson that day.",
            "And then, I realized something important.",
            "And finally, I understood the truth.",
            "And thus, the story came to an end."
          ],
          "answer": "And so, I learned a valuable lesson that day."
        },
        {
          "question": "What is the significance of using 'Once upon a time' in starting a story in English?",
          "options": [
            "It sets a formal tone.",
            "It indicates a historical setting.",
            "It is a traditional way to start a fairy tale or story.",
            "It introduces the main character."
          ],
          "answer": "It is a traditional way to start a fairy tale or story."
        },
        {
          "question": "How do you describe a sequence of events in a story using the past tense in English?",
          "options": [
            "As I walked through the forest, I stumbled upon a hidden clearing.",
            "The next day, I will receive a call from an unknown number.",
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "And so, I learned a valuable lesson that day."
          ],
          "answer": "As I walked through the forest, I stumbled upon a hidden clearing."
        },
        {
          "question": "What phrase can be used to indicate a new development or event in the story in English?",
          "options": [
            "The next day, I received a call from an unknown number.",
            "As I walked through the forest, I stumbled upon a hidden clearing.",
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "Suddenly, everything changed."
          ],
          "answer": "The next day, I received a call from an unknown number."
        },
        {
          "question": "How do you reflect on the impact of the story using the phrase 'From that day on' in English?",
          "options": [
            "From that day on, I never forgot the experience.",
            "And so, I learned a valuable lesson that day.",
            "Once upon a time, in a small village, there lived a young girl named Sarah.",
            "It was a dark and stormy night, and I was driving home from work."
          ],
          "answer": "From that day on, I never forgot the experience."
        }
      ],
      hausa: [
        {
          "question": "What is the meaning of 'A lokacin da aka yi' in Hausa when starting a story?",
          "options": [
            "Once upon a time",
            "It was a dark and stormy night",
            "As I walked through the forest",
            "From that day on"
          ],
          "answer": "Once upon a time"
        },
        {
          "question": "How would you set the scene for a story in Hausa, similar to 'It was a dark and stormy night'?",
          "options": [
            "A lokacin da aka yi, a wata gari karama",
            "A ranar da aka yi, na yi tafiya daga aiki",
            "A lokacin da na yi tafiya a dajin",
            "Ranar da ta biyo, na samu kiran waya daga wani lambar da ba na sani ba"
          ],
          "answer": "A ranar da aka yi, na yi tafiya daga aiki"
        },
        {
          "question": "What is the meaning of 'A lokacin da na yi tafiya a dajin' in Hausa?",
          "options": [
            "As I walked through the village",
            "As I walked through the forest",
            "As I drove home from work",
            "As I received a call from an unknown number"
          ],
          "answer": "As I walked through the forest"
        },
        {
          "question": "How would you describe a sequence of events in a story in Hausa, similar to 'As I walked through the forest, I stumbled upon a hidden clearing'?",
          "options": [
            "A lokacin da aka yi, a wata gari karama",
            "A ranar da aka yi, na yi tafiya daga aiki",
            "A lokacin da na yi tafiya a dajin, na samu wata fili mai tsarki",
            "Ranar da ta biyo, na samu kiran waya daga wani lambar da ba na sani ba"
          ],
          "answer": "A lokacin da na yi tafiya a dajin, na samu wata fili mai tsarki"
        },
        {
          "question": "What is the meaning of 'Ranar da ta biyo, na samu kiran waya daga wani lambar da ba na sani ba' in Hausa?",
          "options": [
            "The next day, I received a call from an unknown number",
            "The next day, I walked through the forest",
            "The next day, I drove home from work",
            "The next day, I stumbled upon a hidden clearing"
          ],
          "answer": "The next day, I received a call from an unknown number"
        },
        {
          "question": "How would you conclude a story in Hausa, similar to 'And so, I learned a valuable lesson that day'?",
          "options": [
            "Kuma, na koya darasi mai amfani a ranar da",
            "Daga ranar da, ba na manta abin da ya faru ba",
            "A lokacin da aka yi, a wata gari karama",
            "Ranar da ta biyo, na samu kiran waya daga wani lambar da ba na sani ba"
          ],
          "answer": "Kuma, na koya darasi mai amfani a ranar da"
        },
        {
          "question": "What is the meaning of 'Kuma' in the context of concluding a story in Hausa?",
          "options": [
            "Therefore",
            "However",
            "And so",
            "But"
          ],
          "answer": "And so"
        },
        {
          "question": "How would you reflect on a story in Hausa, similar to 'From that day on, I never forgot the experience'?",
          "options": [
            "Daga ranar da, ba na manta abin da ya faru ba",
            "Kuma, na koya darasi mai amfani a ranar da",
            "A lokacin da aka yi, a wata gari karama",
            "Ranar da ta biyo, na samu kiran waya daga wani lambar da ba na sani ba"
          ],
          "answer": "Daga ranar da, ba na manta abin da ya faru ba"
        },
        {
          "question": "What is the correct way to start a story in Hausa, indicating a past event?",
          "options": [
            "A lokacin da aka yi",
            "A ranar da aka yi",
            "A lokacin da na yi tafiya a dajin",
            "Ranar da ta biyo"
          ],
          "answer": "A lokacin da aka yi"
        },
        {
          "question": "How would you describe an event that happened the next day in Hausa?",
          "options": [
            "Ranar da ta biyo",
            "A lokacin da aka yi",
            "A ranar da aka yi",
            "A lokacin da na yi tafiya a dajin"
          ],
          "answer": "Ranar da ta biyo"
        },
        {
          "question": "What is the meaning of 'A ranar da aka yi' in Hausa when setting the scene for a story?",
          "options": [
            "It was a dark and stormy night",
            "Once upon a time",
            "As I walked through the forest",
            "From that day on"
          ],
          "answer": "It was a dark and stormy night"
        },
        {
          "question": "How would you indicate a conclusion or a final thought in a story in Hausa?",
          "options": [
            "Kuma",
            "Daga ranar da",
            "A lokacin da aka yi",
            "Ranar da ta biyo"
          ],
          "answer": "Kuma"
        },
        {
          "question": "What is the meaning of 'Daga ranar da, ba na manta abin da ya faru ba' in Hausa?",
          "options": [
            "From that day on, I never forgot the experience",
            "From that day on, I always remembered the experience",
            "From that day on, I tried to forget the experience",
            "From that day on, I was afraid of the experience"
          ],
          "answer": "From that day on, I never forgot the experience"
        },
        {
          "question": "How would you describe a sequence of events leading to a discovery in Hausa?",
          "options": [
            "A lokacin da na yi tafiya a dajin, na samu wata fili mai tsarki",
            "Ranar da ta biyo, na samu kiran waya daga wani lambar da ba na sani ba",
            "A lokacin da aka yi, a wata gari karama",
            "A ranar da aka yi, na yi tafiya daga aiki"
          ],
          "answer": "A lokacin da na yi tafiya a dajin, na samu wata fili mai tsarki"
        },
        {
          "question": "What is the correct way to indicate a reflection or aftermath in a story in Hausa?",
          "options": [
            "Daga ranar da, ba na manta abin da ya faru ba",
            "Kuma, na koya darasi mai amfani a ranar da",
            "A lokacin da na yi tafiya a dajin",
            "Ranar da ta biyo"
          ],
          "answer": "Daga ranar da, ba na manta abin da ya faru ba"
        },
        {
          "question": "How would you set the scene for a story indicating the location in Hausa?",
          "options": [
            "A lokacin da aka yi, a wata gari karama",
            "A ranar da aka yi, na yi tafiya daga aiki",
            "A lokacin da na yi tafiya a dajin",
            "Ranar da ta biyo, na samu kiran waya daga wani lambar da ba na sani ba"
          ],
          "answer": "A lokacin da aka yi, a wata gari karama"
        },
        {
          "question": "What is the meaning of 'A lokacin da na yi tafiya a dajin' in the context of describing an event in Hausa?",
          "options": [
            "As I walked through the village",
            "As I walked through the forest",
            "As I drove home from work",
            "As I received a call from an unknown number"
          ],
          "answer": "As I walked through the forest"
        }
      ],
      french: [
        {
          "question": "What is a common way to start a story in French?",
          "options": [
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "C'était une nuit sombre et orageuse, et je conduisais pour rentrer chez moi.",
            "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée.",
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là."
          ],
          "answer": "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah."
        },
        {
          "question": "How do you set the scene for a story in French?",
          "options": [
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "C'était une nuit sombre et orageuse, et je conduisais pour rentrer chez moi.",
            "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée.",
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là."
          ],
          "answer": "C'était une nuit sombre et orageuse, et je conduisais pour rentrer chez moi."
        },
        {
          "question": "What phrase do you use to describe a sequence of events in a story in French?",
          "options": [
            "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée.",
            "Le lendemain, j'ai reçu un appel d'un numéro inconnu.",
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là."
          ],
          "answer": "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée."
        },
        {
          "question": "How do you continue the story by indicating a new day or event in French?",
          "options": [
            "Le lendemain, j'ai reçu un appel d'un numéro inconnu.",
            "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée.",
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là."
          ],
          "answer": "Le lendemain, j'ai reçu un appel d'un numéro inconnu."
        },
        {
          "question": "What phrase do you use to conclude a story in French?",
          "options": [
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là.",
            "À partir de ce jour-là, je n'ai jamais oublié l'expérience.",
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "C'était une nuit sombre et orageuse, et je conduisais pour rentrer chez moi."
          ],
          "answer": "Et ainsi, j'ai appris une leçon précieuse ce jour-là."
        },
        {
          "question": "How do you reflect on the story and its impact in French?",
          "options": [
            "À partir de ce jour-là, je n'ai jamais oublié l'expérience.",
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là.",
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "C'était une nuit sombre et orageuse, et je conduisais pour rentrer chez moi."
          ],
          "answer": "À partir de ce jour-là, je n'ai jamais oublié l'expérience."
        },
        {
          "question": "What is the purpose of the introduction in a narrative structure in French?",
          "options": [
            "To describe a sequence of events",
            "To conclude the story",
            "To set the scene and introduce characters",
            "To reflect on the story"
          ],
          "answer": "To set the scene and introduce characters"
        },
        {
          "question": "What is the role of the body in a narrative structure in French?",
          "options": [
            "To introduce the story",
            "To conclude the story",
            "To describe a sequence of events",
            "To reflect on the story"
          ],
          "answer": "To describe a sequence of events"
        },
        {
          "question": "How do you transition between different parts of the story in French?",
          "options": [
            "Le lendemain, j'ai reçu un appel d'un numéro inconnu.",
            "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée.",
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "Et alors, quelque chose d'inattendu s'est produit."
          ],
          "answer": "Le lendemain, j'ai reçu un appel d'un numéro inconnu."
        },
        {
          "question": "What phrase can be used to start a story in a more traditional or fairy tale-like manner in French?",
          "options": [
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "C'était une nuit sombre et orageuse, et je conduisais pour rentrer chez moi.",
            "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée.",
            "Au début, il y avait un jeune garçon nommé Jack."
          ],
          "answer": "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah."
        },
        {
          "question": "How do you use transitional phrases to connect events in a story in French?",
          "options": [
            "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée.",
            "Le lendemain, j'ai reçu un appel d'un numéro inconnu.",
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là.",
            "Pendant ce temps, de retour à la maison..."
          ],
          "answer": "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée."
        },
        {
          "question": "What is the purpose of the conclusion in a narrative structure in French?",
          "options": [
            "To introduce the story",
            "To describe a sequence of events",
            "To conclude the story and reflect on its impact",
            "To set the scene"
          ],
          "answer": "To conclude the story and reflect on its impact"
        },
        {
          "question": "How do you use the phrase 'Et ainsi' to conclude a story in French?",
          "options": [
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là.",
            "Et alors, j'ai réalisé quelque chose d'important.",
            "Et finalement, j'ai compris la vérité.",
            "Et ainsi, l'histoire a pris fin."
          ],
          "answer": "Et ainsi, j'ai appris une leçon précieuse ce jour-là."
        },
        {
          "question": "What is the significance of using 'Il était une fois' in starting a story in French?",
          "options": [
            "It sets a formal tone.",
            "It indicates a historical setting.",
            "It is a traditional way to start a fairy tale or story.",
            "It introduces the main character."
          ],
          "answer": "It is a traditional way to start a fairy tale or story."
        },
        {
          "question": "How do you describe a sequence of events in a story using the past tense in French?",
          "options": [
            "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée.",
            "Le lendemain, je recevrai un appel d'un numéro inconnu.",
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là."
          ],
          "answer": "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée."
        },
        {
          "question": "What phrase can be used to indicate a new development or event in the story in French?",
          "options": [
            "Le lendemain, j'ai reçu un appel d'un numéro inconnu.",
            "Alors que je marchais à travers la forêt, je suis tombé sur une clairière cachée.",
            "Il était une fois, dans un petit village, il y avait une jeune fille nommée Sarah.",
            "Soudain, tout a changé."
          ],
          "answer": "Le lendemain, j'ai reçu un appel d'un numéro inconnu."
        },
        {
          "question": "How do you reflect on the impact of the story using the phrase 'À partir de ce jour-là' in French?",
          "options": [
            "À partir de ce jour-là, je n'ai jamais oublié l'expérience.",
            "Et ainsi, j'ai appris une leçon précieuse ce jour-là.",
            "Il était une fois, dans un petit village, il y había una jeune fille nommée Sarah.",
            "C'était une nuit sombre et orageuse, et je conduisais pour rentrer chez moi."
          ],
          "answer": "À partir de ce jour-là, je n'ai jamais oublié l'expérience."
        }
      ],
      spanish: [
        {
          "question": "What is the meaning of 'Había una vez' in Spanish when starting a story?",
          "options": [
            "Once upon a time",
            "It was a dark and stormy night",
            "As I walked through the forest",
            "From that day on"
          ],
          "answer": "Once upon a time"
        },
        {
          "question": "How would you set the scene for a story in Spanish, similar to 'It was a dark and stormy night'?",
          "options": [
            "Había una vez, en un pequeño pueblo, había una joven llamada Sara.",
            "Era una noche oscura y tormentosa, y yo conducía para regresar a casa.",
            "Mientras caminaba por el bosque, me encontré con una clara oculta.",
            "Al día siguiente, recibí una llamada de un número desconocido."
          ],
          "answer": "Era una noche oscura y tormentosa, y yo conducía para regresar a casa."
        },
        {
          "question": "What is the meaning of 'Mientras caminaba por el bosque' in Spanish?",
          "options": [
            "As I walked through the village",
            "As I walked through the forest",
            "As I drove home from work",
            "As I received a call from an unknown number"
          ],
          "answer": "As I walked through the forest"
        },
        {
          "question": "How would you describe a sequence of events in a story in Spanish, similar to 'As I walked through the forest, I stumbled upon a hidden clearing'?",
          "options": [
            "Había una vez, en un pequeño pueblo, había una joven llamada Sara.",
            "Era una noche oscura y tormentosa, y yo conducía para regresar a casa.",
            "Mientras caminaba por el bosque, me encontré con una clara oculta.",
            "Al día siguiente, recibí una llamada de un número desconocido."
          ],
          "answer": "Mientras caminaba por el bosque, me encontré con una clara oculta."
        },
        {
          "question": "What is the meaning of 'Al día siguiente, recibí una llamada de un número desconocido' in Spanish?",
          "options": [
            "The next day, I received a call from an unknown number",
            "I walked through the forest",
            "I drove home from work",
            "I stumbled upon a hidden clearing"
          ],
          "answer": "The next day, I received a call from an unknown number"
        },
        {
          "question": "How would you conclude a story in Spanish, similar to 'And so, I learned a valuable lesson that day'?",
          "options": [
            "Y así, aprendí una lección valiosa ese día.",
            "A partir de ese día, nunca olvidé la experiencia.",
            "Había una vez, en un pequeño pueblo, había una joven llamada Sara.",
            "Era una noche oscura y tormentosa, y yo conducía para regresar a casa."
          ],
          "answer": "Y así, aprendí una lección valiosa ese día."
        },
        {
          "question": "What is the meaning of 'Y así' in the context of concluding a story in Spanish?",
          "options": [
            "Therefore",
            "However",
            "And so",
            "But"
          ],
          "answer": "And so"
        },
        {
          "question": "How would you reflect on a story in Spanish, similar to 'From that day on, I never forgot the experience'?",
          "options": [
            "A partir de ese día, nunca olvidé la experiencia.",
            "Y así, aprendí una lección valiosa ese día.",
            "Había una vez, en un pequeño pueblo, había una joven llamada Sara.",
            "Era una noche oscura y tormentosa, y yo conducía para regresar a casa."
          ],
          "answer": "A partir de ese día, nunca olvidé la experiencia."
        },
        {
          "question": "What is the correct way to start a story in Spanish, indicating a past event?",
          "options": [
            "Había una vez",
            "Era una noche oscura y tormentosa",
            "Mientras caminaba por el bosque",
            "Al día siguiente"
          ],
          "answer": "Había una vez"
        },
        {
          "question": "How would you describe an event that happened the next day in Spanish?",
          "options": [
            "Al día siguiente",
            "Había una vez",
            "Era una noche oscura y tormentosa",
            "Mientras caminaba por el bosque"
          ],
          "answer": "Al día siguiente"
        },
        {
          "question": "What is the meaning of 'Era una noche oscura y tormentosa' in Spanish when setting the scene for a story?",
          "options": [
            "It was a dark and stormy night",
            "Once upon a time",
            "As I walked through the forest",
            "From that day on"
          ],
          "answer": "It was a dark and stormy night"
        },
        {
          "question": "How would you indicate a conclusion or a final thought in a story in Spanish?",
          "options": [
            "Y así",
            "A partir de ese día",
            "Había una vez",
            "Era una noche oscura y tormentosa"
          ],
          "answer": "Y así"
        },
        {
          "question": "What is the meaning of 'A partir de ese día, nunca olvidé la experiencia' in Spanish?",
          "options": [
            "From that day on, I never forgot the experience",
            "From that day on, I always remembered the experience",
            "From that day on, I tried to forget the experience",
            "From that day on, I was afraid of the experience"
          ],
          "answer": "From that day on, I never forgot the experience"
        },
        {
          "question": "How would you describe a sequence of events leading to a discovery in Spanish?",
          "options": [
            "Mientras caminaba por el bosque, me encontré con una clara oculta.",
            "Al día siguiente, recibí una llamada de un número desconocido.",
            "Había una vez, en un pequeño pueblo, había una joven llamada Sara.",
            "Era una noche oscura y tormentosa, y yo conducía para regresar a casa."
          ],
          "answer": "Mientras caminaba por el bosque, me encontré con una clara oculta."
        },
        {
          "question": "What is the correct way to reflect on a story in Spanish, indicating a new perspective or lesson learned?",
          "options": [
            "A partir de ese día, nunca olvidé la experiencia.",
            "Y así, aprendí una lección valiosa ese día.",
            "Mientras caminaba por el bosque",
            "Al día siguiente"
          ],
          "answer": "A partir de ese día, nunca olvidé la experiencia."
        },
        {
          "question": "How would you set the scene for a story indicating the location in Spanish?",
          "options": [
            "Había una vez, en un pequeño pueblo, había una joven llamada Sara.",
            "Era una noche oscura y tormentosa, y yo conducía para regresar a casa.",
            "Mientras caminaba por el bosque",
            "Al día siguiente"
          ],
          "answer": "Había una vez, en un pequeño pueblo, había una joven llamada Sara."
        },
        {
          "question": "What is the meaning of 'Mientras caminaba por el bosque' in the context of describing an event in Spanish?",
          "options": [
            "As I walked through the village",
            "As I walked through the forest",
            "As I drove home from work",
            "As I received a call from an unknown number"
          ],
          "answer": "As I walked through the forest"
        }
      ]
    }
  }
]