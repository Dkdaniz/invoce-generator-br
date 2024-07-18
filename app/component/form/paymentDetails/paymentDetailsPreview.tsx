import { currencyList } from '@/lib/currency';
import { methodList } from '@/lib/methodsPayment';
import { ChevronDown } from 'lucide-react';

export const PaymentDetailsPreview: React.FC<
  PaymentDetails & { onClick?: (step: string) => void }
> = ({ currency = 'BRL', method = 'PIX', onClick }) => {
  const currencyDetails = currencyList.find(
    (currencyDetails) =>
      currencyDetails.value.toLowerCase() === currency.toLowerCase()
  )?.details;

  const methodListDetails = methodList.find(
    (methodListDetails) =>
      methodListDetails.value.toLowerCase() === method.toLowerCase()
  );

  return (
    <div
      className='grid grid-cols-2 group cursor-pointer relative'
      onClick={() => onClick && onClick('4')}
    >
      {!!onClick && (
        <>
          <ChevronDown className='animate-pulse w-5 h-5 text-orange-500 rotate-[135deg] group-hover:block hidden absolute top-0 left-0' />
          <ChevronDown className='animate-pulse w-5 h-5 text-orange-500 -rotate-[135deg] group-hover:block hidden absolute top-0 right-0' />
          <ChevronDown className='animate-pulse w-5 h-5 text-orange-500 rotate-45 group-hover:block hidden absolute bottom-0 left-0' />
          <ChevronDown className='animate-pulse w-5 h-5 text-orange-500 -rotate-45 group-hover:block hidden absolute bottom-0 right-0 ' />
        </>
      )}

      <div className='py-4 px-10'>
        <p className='text-[11px] text-neutral-400 font-medium uppercase mb-3'>
          Método de Pagamento
        </p>
        {methodListDetails && (
          <div className='flex gap-2 justify-between items-center w-full'>
            <div className='flex gap-3 items-center'>
              <methodListDetails.icon className='w-8 h-8 rounded-full' />
              <div>
                <p className='font-medium text-sm'>{methodListDetails.label}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='py-4 px-10'>
        <p className='text-[11px] text-neutral-400 font-medium uppercase mb-3'>
          Moeda de Pagamento
        </p>
        {currencyDetails && (
          <div className='flex gap-2 justify-between items-center w-full'>
            <div className='flex gap-3 items-center'>
              <currencyDetails.icon className='w-8 h-8 rounded-full' />
              <div>
                <p className='font-medium text-sm'>
                  {currencyDetails.currencyName}
                </p>
                <p className='text-xxs text-neutral-400'>
                  {currencyDetails.currencySymbol}{' '}
                  {currencyDetails.currencyShortForm}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
