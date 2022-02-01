import React, { useState, useContext } from "react";


enum ActiveTabData {
    Podcasts,
    Videos,
    Audios,
}

const initialValues: {
    sermon: ActiveTabData,
    updateSermon: Function
} = {
    sermon: ActiveTabData.Videos,
    updateSermon: (value: ActiveTabData) => {
    }
};


const GlobalContext = React.createContext(initialValues);

const useGeneralData = () => useContext(GlobalContext);

const GeneralDataProvider: React.FC = ({ children }) => {

    const [sermon, setSermon] = useState<ActiveTabData>(ActiveTabData.Videos);

    const updateSermon = (value: ActiveTabData) => {
        setSermon(value);
    }
    return (
        <GlobalContext.Provider
            value={{
                sermon,
                updateSermon,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};



export { GeneralDataProvider, useGeneralData };

