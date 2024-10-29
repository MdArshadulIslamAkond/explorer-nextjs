import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


const AboutPage = async() => {
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <div className="px-12 py-24 min-h-screen">
            <h6 className="text-4xl text-center">About Page.</h6>
        </div>
    );
};

export default AboutPage;