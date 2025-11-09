import useUrlState from '@ahooksjs/use-url-state';
export const useQuery = <T extends Record<string, any>>() => {
    const [state] = useUrlState<T>();
    return state;
};
