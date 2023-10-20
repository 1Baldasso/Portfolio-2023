import React, { createContext, useState } from 'react';
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
  const [menuData, setMenuData] = useState(PtMenu)

  const changeLanguage = () => {
    if (language == 'pt-BR') {
      setLanguage('en-US');
      setPerson(EnPerson.Person);
      setProjects(EnProjects.Projects);
      setMenuData(EnMenu);
    }
    else {
      setLanguage('pt-BR');
      setPerson(PtPerson.Person);
      setProjects(PtProjects.Projects);
      setMenuData(PtMenu);
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      changeLanguage,
      projects,
      menuData,
      person 
      }}>
      {children}
    </LanguageContext.Provider>
  );
};