import { useCallback, useEffect, useState } from 'react'
import InformationCard from './MI-InformationCard/InformationCard';
import BtnCreateInfo from './MI-Boutons/BtnCreateInfo/BtnCreateInfo';
import { getUserDatas } from '../../services/api/data';

const MyInformations = () => {

    const [informations, setInformations] = useState([]);

    const displayAllInformations = useCallback(async () => {
        //appel API pour récupérer les datas du user connecté
        const datas: any = await getUserDatas()
        const arrayDatas = datas.data
        setInformations(arrayDatas);
    }, []);

    // Au chargement de la page, appel de la fonction
    // Quand user crée une data, MAJ de la liste des datas affichées
    useEffect(() => {
        displayAllInformations();
    }, [displayAllInformations]);

    return (
        <div className='myInformations sm:w-1/2 p-2 '>
            <div className='myInformations__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
                <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Vos informations :</h3>
                {
                    informations.length > 0 ? informations.map((data: any, index: number) => {
                        return (
                            <InformationCard
                                key={index}
                                id={data}
                                name={data.value}
                                value={data.name}
                                refreshData={displayAllInformations}
                            />
                        )
                    }) : <p>Pas d'informations</p>
                }

                <BtnCreateInfo refreshData={displayAllInformations} />
            </div>
        </div>
    )
}

export default MyInformations
