import { BsHospital } from "react-icons/bs";
import { LuSchool } from "react-icons/lu";
import { MdOutlineInventory } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineLocalPharmacy } from "react-icons/md";
export default function TypeOfSoftware() {
  return (
    <div className="">
      <h2 className="text-center font-bold text-xl md:text-3xl p-4 lg:text-3xl ">
        Types of Software
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          We Develop
        </span>
      </h2>
      <div className="flex flex-col gap-6">
        {/*  Hospital Management Software  */}
        <div className="p-4 rounded-lg flex items-center gap-4  bg-sky-500/10 hover:bg-sky-500/20">
          <BsHospital className="text-4xl" />
          <div className="border-l-4 px-4">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              Hospital Management Software
            </h3>
            <p className="text-[10px] lg:text-sm">
              Manage patients, doctors, billing, and reports in one system.
            </p>
          </div>
        </div>
        {/*  School Management Software  */}
        <div className="p-4 rounded-lg flex items-center gap-4  bg-sky-500/10 hover:bg-sky-500/20">
          <LuSchool className="text-4xl" />
          <div className="border-l-4 px-4">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              School Management Software
            </h3>
            <p className="text-[10px] lg:text-sm">
              Handle admissions, attendance, exams, and academic records
              digitally.
            </p>
          </div>
        </div>
        {/*  Pharmacy Management Software  */}
        <div className="p-4 rounded-lg flex items-center gap-4  bg-sky-500/10 hover:bg-sky-500/20">
          <MdOutlineLocalPharmacy className="text-4xl" />
          <div className="border-l-4 px-4">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              Pharmacy Management Software
            </h3>
            <p className="text-[10px] lg:text-sm">
              Simplify medicine inventory, sales, and customer records.
            </p>
          </div>
        </div>
        {/*  Inventory Management Software  */}
        <div className="p-4 rounded-lg flex items-center gap-4  bg-sky-500/10 hover:bg-sky-500/20">
          <MdOutlineInventory className="text-4xl" />
          <div className="border-l-4 px-4">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              Inventory Management Software
            </h3>
            <p className="text-[10px] lg:text-sm">
              Track stock, purchase, sales, and supplier details with ease.
            </p>
          </div>
        </div>
        {/*  Employee Management Software  */}
        <div className="p-4 rounded-lg flex items-center gap-4  bg-sky-500/10 hover:bg-sky-500/20">
          <GrUserWorker className="text-4xl" />
          <div className="border-l-4 px-4">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              Employee Management Software
            </h3>
            <p className="text-[10px] lg:text-sm">
              Manage staff attendance, payroll, and performance efficiently.
            </p>
          </div>
        </div>
        {/*  E-commerce Solutions */}
        <div className="p-4 rounded-lg flex items-center gap-4  bg-sky-500/10 hover:bg-sky-500/20">
          <MdOutlineShoppingBag className="text-4xl" />
          <div className="border-l-4 px-4">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              E-commerce Solutions
            </h3>
            <p className="text-[10px] lg:text-sm">
              Build scalable online stores with secure payment gateways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
