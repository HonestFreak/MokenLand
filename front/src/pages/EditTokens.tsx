import Breadcrumb from '../components/Breadcrumb';
import fireToast from '../hooks/fireToast';
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
const EditToken = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState(localStorage.getItem("alertSettings")?JSON.parse(localStorage.getItem("alertSettings")):[]);
  useEffect(() => {
    // storing input name
    localStorage.setItem("alertSettings", JSON.stringify(rows));
  }, [rows]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <>
      <div className="mx-auto max-w-270">
        
        <Breadcrumb pageName="New Moken" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">

          <div className="relative z-20 bg-white dark:bg-form-input">
                  <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                    <option value="">ERC20</option>
                    {/* <option value="">ERC 721 (NFT)</option>
                    <option value="">ERC 1151</option> */}
                  </select>
          </div><br/>

          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                🪂 Transfer / Airdrop
                </h3>
              </div>
              
              <div className="p-7">
                
                <form action="#">

             
                  <div className="mb-5.5">

                  <div className='pb-6'>
                <label className="mb-3 block text-black dark:text-white">
                  Account Address
                </label>
                <textarea
                  rows={6}
                  placeholder="one address per line"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
              </div>
              
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="number"
                    >
                      Tokens to Send
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="number"
                        name="supply"
                        id="supply"
                        placeholder="10000"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                      type="submit"
                      onClick={fireToast}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div> <br/>

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                💎 Increase Supply
                </h3>
              </div>
              
              <div className="p-7">
                
                <form action="#">

             
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="number"
                    >
                      Mint More Mokens
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="number"
                        name="supply"
                        id="supply"
                        placeholder="10000"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                      type="submit"
                      onClick={fireToast}
                    >
                      Mint
                    </button>
                  </div>
                </form>
              </div>
            </div>

                      <br/>

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                🔥 Decrease Supply
                </h3>
              </div>
              
              <div className="p-7">
                
                <form action="#">

             
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="number"
                    >
                      Burn Mokens
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="number"
                        name="supply"
                        id="supply"
                        placeholder="10000"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                      type="submit"
                      onClick={fireToast}
                    >
                      Burn
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                🗿 ChadPod : never gonna let you down
                </h3>
              </div>
              <div className="p-7">
              😯 Create your own Token on the Mode sidechain <Link to={"https://www.mode.network/"}>(🔗know more)</Link> easily without any coding hassles.
               <br/><br/>
               😍 Mode has implemented Optimism's Bedrock upgrade which has significantly reduced the fees to be over 95% less than Ethereum. 
                <br/><br/>
               🤑 You will earn a share of the network Sequencer fees whenever your token is used in a transaction. <Link to={"https://docs.mode.network/explanation/sequencer-fee-sharing"}>(🔗know more)</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditToken;
