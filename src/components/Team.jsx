
const teamMembersData = [
  {
    id: 1,
    name: "Abdurakhmonov Muhammad",
    image: "/src/assets/images/cero.jpg",
    role: "CEO"
  },
  {
    id: 2,
    name: "Abdurakhmonov Dilmurod",
    image: "/src/assets/images/cero.jpg",
    role: "Manager"
  }
];

const Team = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-4xl font-bold text-orange-500 mb-6">Meet Our Team</h2>
      <div className="flex justify-center flex-wrap max-w-screen-lg mx-auto">
        {teamMembersData.map((member) => (
          <div key={member.id} className="flex flex-col items-center p-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-2 object-cover"
            />
            <p className="text-black text-lg">{member.name}</p>
            <p className="text-orange-400 font-bold text-lg">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
