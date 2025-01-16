import MessagesPage from './src/pages/messages.jsx';

var routes = [
  {
    path: '/',
    component: MessagesPage,
  },
 
  {
    path: '/li/',
    component: () => {
      window.location.href = "https://www.linkedin.com/in/ayush-jain-242a48220/";
      return null; // or an empty component
    },
  },
  
  {
    path: '/message/',
    component: MessagesPage,
  },
];

export default routes;
