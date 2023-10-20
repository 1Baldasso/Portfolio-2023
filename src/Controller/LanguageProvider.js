import React, { createContext, useState, useEffect } from 'react';
import  PtMenu  from '../Assets/Data/pt-BR/MenuData';
import  EnMenu  from '../Assets/Data/en-US/MenuData';
import  PtProjects  from '../Assets/Data/pt-BR/ProjectsData';
import  EnProjects  from '../Assets/Data/en-US/ProjectsData';
import  PtPerson  from '../Assets/Data/pt-BR/PersonData';
import  EnPerson  from '../Assets/Data/en-US/PersonData';


// Create the language context
export const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt-BR');
  const [projects, setProjects] = useState(PtProjects.Projects);
  const [person, setPerson] = useState(PtPerson.Person);
  const [menuData, setMenuData] = useState(PtMenu);

  useEffect(()=>{
    checkLanguage();
  }, [language])

  const checkLanguage = () =>
  {
    if(localStorage.getItem('language'))
    {
      const lang = localStorage.getItem('language')
      setLanguage(lang);
      setItems();
    }
    setItems();      
  }

  const setItems = () => {
    if (language != 'pt-BR') {
      setPerson(EnPerson.Person);
      setProjects(EnProjects.Projects);
      setMenuData(EnMenu);
    }
    else
    {
      setPerson(PtPerson.Person);
      setProjects(PtProjects.Projects);
      setMenuData(PtMenu);
    }
  }

  const changeLanguage = () => {
    if (language !== 'en-US') {
      localStorage.setItem('language', 'en-US');
    }
    else {
      localStorage.setItem('language', 'pt-BR');
    }
    checkLanguage();
  };

  return (
    <LanguageContext.Provider value={{ 
      changeLanguage,
      checkLanguage,
      projects,
      menuData,
      person 
      }}>
      {children}
    </LanguageContext.Provider>
  );
};