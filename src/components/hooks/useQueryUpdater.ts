import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { QUERY_PARAMS as QUERY_PARAM } from "../../constants/router.constants";
import { replace } from "redux-first-history";
import { getPath, getQueryParams } from "../../selectors";

const useQueryUpdater = () => {
    const dispatch = useDispatch()
    const currentPath = useSelector(getPath);
    const currentQueryParams = useSelector(getQueryParams);

    return useCallback(
        (values: Partial<Record<QUERY_PARAM, string | null>>) => {
            const query: URLSearchParams = new URLSearchParams(currentQueryParams);

            (Object.keys(values) as QUERY_PARAM[]).forEach((param: QUERY_PARAM) => {
                const value = values[param]

                if (value == null)
                {
                    query.delete(param)
                } else {
                    query.set(param, value)
                }
            })
            
            dispatch(replace(`${currentPath}?${query.toString()}`))
        },  
        [currentPath, currentQueryParams]
    )
}

export default useQueryUpdater