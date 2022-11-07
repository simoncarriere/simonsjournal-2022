import {useState, createContext} from 'react'


export const ContactContext = createContext()



export const ContactProvider = ({children}) => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        console.log(sidebarOpen)
		setSidebarOpen(!sidebarOpen)
	}

    return (
        <ContactContext.Provider value={{sidebarOpen, toggleSidebar}}>
            {children}
        </ContactContext.Provider>
    )
}