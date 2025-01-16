# Assistverse

A MERN Stack Chat Web Application which is a chatbot which gives answers to your questions based on
the input pdf provided which also harnesses the Google Gemini LLM & it helps in text summarisation, better understanding research papers etc. 
It uses MERN technologies and along with that uses the brand new Fast Api technology to make use of LangServe.

Here a picture of the interface.

![image](https://github.com/user-attachments/assets/f80116ec-6bd1-4304-bf96-e6c8472dfb15)

Move to the client directory & hit the following command 

      npm install
      npm run dev

    
Then move to Server directory then hit

    npm install
    npm start

Now go to the Model_Server directory and use commands

    pip install -r requirements.txt
    uvicorn app:app --reload

Make sure you configure the api url as per the server api's.
