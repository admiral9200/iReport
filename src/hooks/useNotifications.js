import { useQuery } from "react-query";

const fetchNotifications = async () => {
    const data = "Example";
    return data;
}

const useNotifications = () => {
    return useQuery(
        "notifications",
        () => fetchNotifications(),
        {
            suspense: false
        }
    )
};

export default useNotifications;