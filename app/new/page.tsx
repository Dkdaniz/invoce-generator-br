import { PreviewDetails } from '@/app/component/form/previewDetails';
import { DownloadInvoiceButton } from '../component/form/downloadInvoice/downloadInvoiceButton';

const Page = () => (
  <div className='min-h-screen overflow-y-auto h-full flex items-center md:flex-row flex-col-reverse'>
    <div className='relative min-h-screen h-full w-full flex justify-center items-center p-4 md:p-0'>
      <div className='absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
      <PreviewDetails
        companyDetails={{
          email: 'gennio.io',
          companyName: 'gennio',
          companyAddress: 'rua aa',
          companyCity: 'rua aa',
          companyState: 'rua aa',
          companyCountry: 'rua aa',
          companyLogo:
            'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png',
          companyTaxId: null,
          companyZip: '18451',
        }}
        invoiceDetails={{
          note: '1',
          discount: '10',
          taxRate: null,
          items: [
            {
              itemDescription: 'Registro',
              qty: 1,
              amount: 10.58,
            },
          ],
          currency: 'BRL',
        }}
        invoiceTerms={{
          invoiceNumber: '123',
          issueDate:
            'Wed Jul 17 2024 00:00:00 GMT-0300 (Brasilia Standard Time)',
          dueDate: 'Wed Jul 17 2024 00:00:00 GMT-0300 (Brasilia Standard Time)',
        }}
        paymentDetails={{
          currency: 'BRL',
          method: 'PIX',
        }}
        yourDetails={{
          yourEmail: 'Cliente@gmail.com',
          yourName: 'daniel',
          yourAddress: 'marques',
          yourCity: 'cwb',
          yourState: 'PR',
          yourCountry: 'Brasil',
          yourLogo:
            'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png',
          yourTaxId: null,
          yourZip: '8254564',
        }}
      />
    </div>
    <DownloadInvoiceButton
      companyDetails={{
        email: 'gennio.io',
        companyName: 'gennio',
        companyAddress: 'rua aa',
        companyCity: 'rua aa',
        companyState: 'rua aa',
        companyCountry: 'rua aa',
        companyLogo:
          'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png',
        companyTaxId: null,
        companyZip: '18451',
      }}
      invoiceDetails={{
        note: '1',
        discount: '10',
        taxRate: null,
        items: [
          {
            itemDescription: 'Registro',
            qty: 1,
            amount: 10.58,
          },
        ],
        currency: 'BRL',
      }}
      invoiceTerms={{
        invoiceNumber: '123',
        issueDate: 'Wed Jul 17 2024 00:00:00 GMT-0300 (Brasilia Standard Time)',
        dueDate: 'Wed Jul 17 2024 00:00:00 GMT-0300 (Brasilia Standard Time)',
      }}
      paymentDetails={{
        currency: 'BRL',
        method: 'PIX',
      }}
      yourDetails={{
        yourEmail: 'Cliente@gmail.com',
        yourName: 'daniel',
        yourAddress: 'marques',
        yourCity: 'cwb',
        yourState: 'PR',
        yourCountry: 'Brasil',
        yourLogo:
          'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png',
        yourTaxId: null,
        yourZip: '8254564',
      }}
    />
  </div>
);

export default Page;
