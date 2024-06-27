import SparklesText from "@/components/magicui/sparkles-text";

const organizers = [
    { title: "Sekretaris", members: [{ name: "Jilan F", nim: "F1B023030" }] },
    {
        title: "Bendahara",
        members: [
            { name: "L1B023053", nim: "Akuakultur" },
            { name: "Setiawati R", nim: "I1J023011" },
        ]
    },
    {
        title: "Marketing",
        members: [
            { name: "Elysta F", nim: "I1A022020" },
            { name: "Naswa L", nim: "I1AO22090" },
            { name: "Ismalita S",nim: "I1A022032" },
            { name: "Aulia R", nim: "A1F023120" },
            { name: "Aulia S", nim: "C0D023015" },
            { name: "Astuti", nim: "A1A022031" }, 
            { name: "Liviana D", nim: "A1A023054" }, 
            { name: "Firni H", nim: "B1A023084" }, 
            { name: "Imerial J", nim: "A1F023006" }, 
            { name: "Hening L", nim: "F1B022111" }
        ]
    },
    {
        title: "Academic",
        members: [
            { name: "Fadila R", nim: "G1A023121" },
            { name: "Happy S", nim: "A1C023035" },
            { name: "Rifdatul B", nim: "F1B023140" },
            { name: "Meysha N", nim: "B1A022100" },
            { name: "Vincentia K", nim: "B1AO22098" },
            { name: "Siti U", nim: "J0AO22072" },
            { name: "Vania E", nim: "J0A022080" },
            { name: "Isnaeni K", nim: "J0B023020" },
            { name: "Helda C", nim: "J0A023020" }
        ]
    },
    {
        title: "Project Manager",
        members: [
            { name: "Syifa M", nim: "K1A022087" },
            { name: "Nadiera I", nim: "F1B022041" },
            { name: "Ariel A", nim: "F1B023103" },
            { name: "M Zaki", nim: "H1D023065" },
            { name: "Dhera A", nim: "C1B022024" },
            { name: "Aldilla I", nim: "A1D022067" },
            { name: "Ukhtisa F", nim: "A1F023028" }
        ]
    },
    {
        title: "Creative Media",
        members: [
            { name: "Adinda W", nim: "J0A023014" },
            { name: "Munajat", nim: "F1F022042" },
            { name: "Dadang Y", nim: "F1F022065" },
            { name: "M Irvan", nim: "D1A023224" },
            { name: "Dhiya W", nim: "B1A022005" },
            { name: "Ahmad A", nim: "F1C021026" },
            { name: "Jehian A", nim: "H1D022006" },
            { name: "Nurul H", nim: "J1B023029" },
            { name: "Rahma H", nim: "A1F023008" },
            { name: "Nabila P", nim: "A1D022142" },
        ]
    },
    {
        title: "Public Relation",
        members: [
            { name: "Tessalonika P", nim: "F1A022118" },
            { name: "Hana S", nim: "I1A022006" },
            { name: "Muftiatul K", nim: "COBO23043" },
            { name: "Devinta M", nim: "I1A022042" },
            { name: "Marselia H", nim: "A1C022012" },
            { name: "Laetare C", nim: "F1A023170" },
            { name: "Khalisa N", nim: "I1A022052" },
            { name: "Novita Y", nim: "J0A022092" },
            { name: "Shefira T", nim: "A1F022034" },
        ]
    },
];

interface OrganizerSectionProps {
  title: string;
  members: { name: string; nim: string }[];
}

const OrganizerSection = ({ title, members }: OrganizerSectionProps) => (
    <>
      <div className="p-2 border text-sm bg-white rounded-lg inline-block mb-2">
        <span className="font-display opacity-70">{title}</span>
      </div>
      <div className="gap-10 lg:gap-14 flex flex-wrap justify-center">
        {members.map((member, index) => (
          <div key={index} className="text-sm flex flex-col justify-center items-center gap-1">
            <img src="/assets/user.svg" alt={`organizer-${index}`} className="h-11 w-11 border object-cover rounded-full" />
            <p className="font-medium leading-tight">{member.name}</p>
            <p className="text-tremor-content leading-tight">{member.nim}</p>
          </div>
        ))}
      </div>
    </>
  );

  export default function Organizers() {
    return (
      <div className="z-10 px-6 lg:px-96 w-full flex flex-col justify-center items-center gap-4">
        <SparklesText text="Meet Our Organizers" />
        {organizers.map((org, index) => (
          <OrganizerSection key={index} title={org.title} members={org.members} />
        ))}
      </div>
    );
  }