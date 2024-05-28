
import Header from '@/components/header';
import MyLineChart from '@/components/graph/linechar';
import MyBarChart from '@/components/graph/barchart';
export default async function Home() {
    return (
        <main className="min-h-screen  items-center mt-5 flex flex-col  px-10">
            <Header />
            <div className=" w-full">
                <div className="flex justify-center">
                    <div style={{ width: "1000px" }}>
                        <MyLineChart />
                    </div>
                    <div style={{ width: "1000px" }}>
                        <MyBarChart />
                    </div>
                </div>
            </div>
        </main>
    );
}
