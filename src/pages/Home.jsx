import Footer from "../components/Footer";
import { Header } from "../components/Header";
import InputShorter from "../components/InputShorter";
import TableLinks from "../components/TableLinks";

export default function Home(){
    return(
        <>
        <Header />
        <main className="text-Lite flex flex-col justify-center items-center gap-8 h-[60vh]">
            <h1 className="text-4xl font-SF_Pro_Display_Bold">LinkARVC: Shrink Your URLs, Expand Your Possibilities</h1>
            <p>Shorten, share, succeed with LinkARVC! Our intuitive link shortening platform enhances your online journey, making every click count.</p>
            <InputShorter />
        </main>
        <section className="px-32">
            <TableLinks />
        </section>
        <Footer />
        </>
    )
}