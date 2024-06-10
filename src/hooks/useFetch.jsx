import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {

    /**
     * On doit observer l'état de chargement, les données et les éventuelles erreurs
     */
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json;charset=UTF8',
                ...options.headers
            }
        }).then(r => r.json()).then(data => {
            setData(data)
        }).catch((e) => {
            setErrors(errors);
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    return {
        loading, data, errors
    }

}