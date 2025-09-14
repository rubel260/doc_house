import axios from "axios";


const axiousPublic = axios.create({
    baseURL: 'https://doc-house-server-neon.vercel.app'
})
const useAxiousPublic = () => {
    return axiousPublic;
};

export default useAxiousPublic;