
import DeleteButton from '@/components/buttons/DeleteButton';
import EditUserButton from '@/components/buttons/EditUserButton';
import Header from '@/components/header';
import CrateUser from '@/components/modals/CreateUser';
async function getUserList() {
  const res = await fetch('http://localhost:3001/api/users', { cache: 'no-store' })
  return res.json()
}
export default async function Home() {
  const userList = await getUserList()
  return (
    <main className="items-center mt-5 flex flex-col  px-10">
      <Header />
      <CrateUser />

      <div className=" w-full">
        <table className="table-auto w-full  border-collapse border ">
          <thead>
            <tr>
              <th className="border text-start p-3">User Name</th>
              <th className="border text-start p-3">Email</th>
              <th className="border text-start p-3">Address</th>
              <th className="border text-start p-3">phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userList.map(((artist, index) => {
              return (
                <tr key={index}>
                  <td className="border p-3">{artist.name}</td>
                  <td className="border p-3">{artist.email}</td>
                  <td className="border p-3">{artist.address}</td>
                  <td className="border p-3">{artist.phone}</td>
                  <td className="border p-3 text-center space-x-2 w-60">
                    <DeleteButton id={artist._id} />
                    <EditUserButton id={artist._id} />
                  </td>
                </tr>
              )
            }))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
