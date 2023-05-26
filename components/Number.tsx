export default function Number({ number }: { number: number }) {
  return (
    <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center flex-shrink-0">
      <p className="text-green-500 font-bold">{number}</p>
    </div>
  );
}
