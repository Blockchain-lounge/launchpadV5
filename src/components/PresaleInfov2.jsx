
import { toEther } from "../utils/web3";

function PresaleInfov2({ launchpadState: { launchpadSale: presale, saleId } }) {
  const accessTypes = ["Angel", "Private", "Public"];
  const tokenTicker = process.env.REACT_APP_TOKEN_TICKER;


  return (
    <div className="bg-[#161616] p-7 w-full h-[25rem] md:h-[initial] md:w-[48%] rounded-3xl">
      <p className="border-b border-[#ffffff20]  pb-4 pt-2 text-xl">Sale Details</p>
      <div className="flex flex-col justify-between h-[80%] mt-8">
        <p className="flex justify-between lg:text-xl">
          <span>Opens:</span>
          <span> 2022-10-26 08:00:00 UTC</span>
        </p>
        <p className="flex justify-between lg:text-xl">
          <span>Closes:</span>
          <span> 2022-10-26 08:00:00 UTC</span>
        </p>
        <p className="flex justify-between lg:text-xl">
          <span>Swap Rate:</span>
          <span>  1 BUSD = {presale?.saleRate || "0"} {tokenTicker}</span>
        </p>
        <p className="flex justify-between lg:text-xl">
          <span>Min Buy:</span>
          <span> {toEther(presale?.saleMin || "0")} BUSD</span>
        </p>
        <p className="flex justify-between lg:text-xl">
          <span>Max Buy:</span>
          <span> {toEther(presale?.saleMax || "0")} BUSD</span>
        </p>
        <p className="flex justify-between lg:text-xl">
          <span>Access type:</span>
          <span> {accessTypes[saleId]}</span>
        </p>
      </div>
    </div>
  );
}

export default PresaleInfov2;
