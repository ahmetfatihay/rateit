import { useState } from "react";

const data = [
  {
    employeeId: "",
    name: "",
    sayi1: "0",
    sayi2: "0",
    sayi3: "0",
    sayi4: "0",
    sayi5: "0",
    overall: "",
  },
];

const EditableTable = () => {
  const [employeeData, setEmployeeData] = useState(data);
  const [katsayi1, setKatSayi1] = useState(0);
  const [katsayi2, setKatSayi2] = useState(0);
  const [katsayi3, setKatSayi3] = useState(0);
  const [katsayi4, setKatSayi4] = useState(0);
  const [katsayi5, setKatSayi5] = useState(0);

  const AddNumbers = (sayi1, sayi2, sayi3, sayi4, sayi5, employeeId) => {
    var totImp = parseFloat(katsayi1) + parseInt(katsayi2) + parseInt(katsayi3) + parseInt(katsayi4) + parseInt(katsayi5);
    var a = parseInt(sayi1) * parseInt(katsayi1) / totImp;
    var b = parseInt(sayi2) * parseInt(katsayi2) / totImp;
    var c = parseInt(sayi3) * parseInt(katsayi3) / totImp;
    var d = parseInt(sayi4) * parseInt(katsayi4) / totImp;
    var e = parseInt(sayi5) * parseInt(katsayi5) / totImp;

    var overall = parseFloat(a + b + c + d + e).toFixed(2);
    for (var k in employeeData) {
      if (employeeData[k].employeeId === employeeId) {
        employeeData[k].overall = overall;
      }
    }
    return overall;
  }

  const onButtonClick = (e, employeeId) => {
    var UniqueID = 0;
    for (UniqueID; UniqueID < employeeData.length; UniqueID) {
      if (UniqueID === employeeData[UniqueID].employeeId) {
        UniqueID++;
      } else {
        break;
      }
    }
    employeeData.push({
      employeeId: { UniqueID },
      name: "",
      sayi1: "0",
      sayi2: "0",
      sayi3: "0",
      sayi4: "0",
      sayi5: "0",
    });
    const editData = employeeData.map((item) =>
      item.employeeId === employeeId ? { ...item } : item
    );
    setEmployeeData(editData);
  };
  const onChangeInput = (e, employeeId) => {

    const { name, value } = e.target;

    for (var k in employeeData) { employeeData[k].overall = AddNumbers(employeeData[k].sayi1, employeeData[k].sayi2, employeeData[k].sayi3, employeeData[k].sayi4, employeeData[k].sayi5); }
    const eata = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );
    setEmployeeData(eata);
    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );


    setEmployeeData(editData);
  };

  const onKatsayi1Change = (e, employeeId, katsayi) => {
    const { name, value } = e.target;
    setKatSayi1(value);
    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };

  const onKatsayi2Change = (e, employeeId, katsayi) => {
    const { name, value } = e.target;
    setKatSayi2(value);
    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };

  const onKatsayi3Change = (e, employeeId, katsayi) => {
    const { name, value } = e.target;
    setKatSayi3(value);
    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };

  const onKatsayi4Change = (e, employeeId, katsayi) => {
    const { name, value } = e.target;
    setKatSayi4(value);
    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };

  const onKatsayi5Change = (e, employeeId, katsayi) => {
    const { name, value } = e.target;
    setKatSayi5(value);
    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };

  const onDeleteButtonClick = (e, employeeId) => {
    const editData = employeeData.filter(
      (item) => item.employeeId !== employeeId
    );
    setEmployeeData(editData);
  };

  const onSortButtonClick = () => { const ovrAscending = [...employeeData].sort((a, b) => b.overall < a.overall ? -1 : 1); setEmployeeData(ovrAscending); };



  return (
    <div class="h-screen font-sans  bg-gray-700">
      <div class="w-full p-4 border border-gray-200 bg-gray-50 rounded-t-xl dark:border-gray-600 dark:bg-gray-800">
        <h1 class="text-center text-3xl font-bold dark:text-gray-100">Rank It</h1>
      </div>
      <div class="grid grid-cols-12 gap-4 text-center uppercase font-bold py-3 dark:bg-gray-800">
        <div class=""></div>
        <div class="py-3 col-span-10  border-2 text-lg border-gray-200 bg-gray-50 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100">CRITERIA</div>
        <div class=""></div>
      </div>
      <div class="grid grid-cols-12 gap-4 text-center text-lg font-bold align-middle dark:bg-gray-800 dark:text-gray-100">
        <div class=""></div>
        <div class="py-3 col-span-2 border-2 border-gray-200 bg-gray-50 rounded-md dark:border-gray-600 dark:bg-gray-700">City and Location</div>
        <div class="py-3 col-span-2 border-2 border-gray-200 bg-gray-50 rounded-md dark:border-gray-600 dark:bg-gray-700">University's Reputation</div>
        <div class="py-3 col-span-2 border-2 border-gray-200 bg-gray-50 rounded-md dark:border-gray-600 dark:bg-gray-700 align-text-middle">Academic Staff</div>
        <div class="py-3 col-span-2 border-2 border-gray-200 bg-gray-50 rounded-md dark:border-gray-600 dark:bg-gray-700">Campus Facilities</div>
        <div class="py-3 col-span-2 border-2 border-gray-200 bg-gray-50 rounded-md dark:border-gray-600 dark:bg-gray-700">Dormitory Facilities</div>
        <div class=""></div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed content-center ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:bg-gray-800 pb-0">
          <tr>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">University</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Importance</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Points</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Importance</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Points</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Importance</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Points</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Importance</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Points</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Importance</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0">Points</th>
            <th scope="col" class="px-1 py-3 text-center text-lg pb-0 pr-10">Overall</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ employeeId, name, sayi1, sayi2, sayi3, sayi4, sayi5, overall }) => (
            <tr key={employeeId} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
              <td class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="name"
                  value={name}
                  type="text"
                  min="0" max="10"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Name"
                />
              </td>
              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="katsayi"
                  type="number"
                  min="0" max="10"
                  value={katsayi1}
                  onChange={(e) => onKatsayi1Change(e, employeeId, katsayi1)}
                  placeholder="Type Importance"
                />
              </td>
              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="sayi1"
                  value={sayi1}
                  type="number"
                  min="0" max="10"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Points"
                />
              </td>
              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="katsayi"
                  type="number"
                  min="0" max="10"
                  value={katsayi2}
                  onChange={(e) => onKatsayi2Change(e, employeeId, katsayi1)}
                  placeholder="Type Importance"
                />
              </td>
              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="sayi2"
                  type="number"
                  min="0" max="10"
                  value={sayi2}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Points"
                />
              </td>


              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="katsayi"
                  type="number"
                  min="0" max="10"
                  value={katsayi3}
                  onChange={(e) => onKatsayi3Change(e, employeeId, katsayi1)}
                  placeholder="Type Importance"
                />
              </td>
              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="sayi3"
                  type="number"
                  min="0" max="10"
                  value={sayi3}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Points"
                />
              </td>
              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="katsayi"
                  type="number"
                  min="0" max="10"
                  value={katsayi4}
                  onChange={(e) => onKatsayi4Change(e, employeeId, katsayi1)}
                  placeholder="Type Importance"
                  pattern="[0-10]"
                />
              </td>
              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="sayi4"
                  type="number"
                  min="0" max="10"
                  value={sayi4}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Points"
                />
              </td>
              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="katsayi"
                  type="number"
                  min="0" max="10"
                  value={katsayi5}
                  onChange={(e) => onKatsayi5Change(e, employeeId, katsayi1)}
                  placeholder="Type Importance"
                />
              </td>
              <td class="px-2 py-4">
                <input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  name="sayi5"
                  type="number"
                  min="0" max="10"
                  value={sayi5}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Points"
                />
              </td>

              <td class="px-2 py-4">
                <div class="grid grid-cols-4 gap-4 text-center uppercase font-bold py-3 px-1 dark:bg-gray-800">

                  <div class="col-span-3"><input class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                    name="toplam"
                    type="text"
                    value={AddNumbers(sayi1, sayi2, sayi3, sayi4, sayi5, employeeId)}
                    onChange={(e) => onChangeInput(e, employeeId)}
                    placeholder="Type Position"

                  /></div>

                  <div class="authButtons basis-1/4  flex flex-col items-center justify-center">   <button class="" onClick={(e) => onDeleteButtonClick(e, employeeId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-center dark:text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                  </button> </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="grid grid-cols-12 gap-4 text-center uppercase font-bold py-3 dark:bg-gray-800 rounded-b-xl">
        <div >
          <button onClick={(e) => onButtonClick(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-center dark:text-white align-middle">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <div class=""> <button onClick={(e) => onSortButtonClick(e)}>
          <svg class="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="6" x2="13" y2="6" />  <line x1="4" y1="12" x2="11" y2="12" />  <line x1="4" y1="18" x2="11" y2="18" />  <polyline points="15 15 18 18 21 15" />  <line x1="18" y1="6" x2="18" y2="18" /></svg>
        </button></div>
      </div>
      <div class="p-6 text-gray-900 whitespace-nowrap dark:text-white font-normal text-lg">
        <p>1.Enter the university names</p>
        <p>2.Enter the importances for all criteria (0-10)</p>
        <p>3.Enter points for each criteria of each school (0-10)</p>
        <p>4.Press + if you want to add school</p>
        <p>5.Press sorting button to sort according to the overall score</p>
      </div>
    </div>
  );
};

export default EditableTable;