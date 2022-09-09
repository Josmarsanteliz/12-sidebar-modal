import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    //function
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    //function modal
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
//OJO VALUE OBJETO
    return <AppContext.Provider value={{openSidebar,closeSidebar,openModal,closeModal,isModalOpen,isSidebarOpen}}> 
        {children}
    </AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {

    return useContext(AppContext)
}
//en vez de estar llamandolo cada rato, uso useGlobalcontext
export {AppContext, AppProvider}