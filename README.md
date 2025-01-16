# Assistverse

A MERN Stack Chat Web Application which is a chatbot which gives answers to your questions based on
the input pdf provided which also harnesses the Google Gemini LLM & it helps in text summarisation, better understanding research papers etc. 
It uses MERN technologies and along with that uses the brand new Fast Api technology to make use of LangServe.

## Snapshots.
 ### Login area

 ![image](https://github.com/user-attachments/assets/8a75b560-88d6-45f3-80e4-af3022fbe782)

 ### Signup area( if you don't have an account, create one)

 ![image](https://github.com/user-attachments/assets/82ece242-6d71-43ed-865e-249dd4563aca)

 ### File Uploading area

 ![image](https://github.com/user-attachments/assets/44188063-478d-424f-9010-09596ce1595a)


 ### Messaging area
![image](https://github.com/user-attachments/assets/f80116ec-6bd1-4304-bf96-e6c8472dfb15)

## steps to run this application

### Move to the client directory & execute the following commands

      npm install
      npm run dev

    
### Then move to the Server directory and execute

    npm install
    npm start

### Finally go to the Model_Server directory and use commands

    pip install -r requirements.txt
    uvicorn app:app --reload

NOTE: Make sure you configure the api url as per the server api's.
