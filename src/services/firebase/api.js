
import { getDocs, collection, query, where } from 'firebase/firestore'
import { dataBase } from '.'

export const productosDeBD = (categoriaId) =>{
   
    return new Promise((resolve,reject) => {
        const collectionRef = categoriaId
        ? query(collection(dataBase,'productos'), where('categoria', '==', categoriaId ))
        :collection(dataBase,'productos')

        getDocs(collectionRef).then(respuesta =>{
            const productos = respuesta.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            resolve(productos)
        }).catch(error => {
            reject(error)
        })

    })
}