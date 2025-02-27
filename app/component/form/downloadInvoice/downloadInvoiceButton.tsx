'use client';

import { Button } from '../../ui/button';
import { Document, Font, Page } from '@react-pdf/renderer';
import { CheckCircle2, Download, LoaderIcon, SplineIcon } from 'lucide-react';
import { PdfDetails } from '../pdfDetails';
import { pdfContainers } from '@/lib/pdfStyles';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import { svgToDataUri } from '@/lib/svgToDataUri';
import { useEffect, useState } from 'react';
import { currencyList } from '@/lib/currency';
import { methodList } from '@/lib/methodsPayment';

export const DownloadInvoiceButton = ({
  yourDetails,
  companyDetails,
  invoiceDetails,
  paymentDetails,
  invoiceTerms,
}: {
  yourDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceItemDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
}) => {
  const [status, setStatus] = useState<
    'downloaded' | 'downloading' | 'not-downloaded'
  >('not-downloaded');

  const getCountryImageUrl = async (): Promise<string | undefined> => {
    const currencyDetails = currencyList.find(
      (currencyDetail) =>
        currencyDetail.value.toLowerCase() ===
        invoiceDetails.currency.toLowerCase()
    )?.details.iconName;

    const data = await fetch(
      `/flag/1x1/${currencyDetails ? currencyDetails : 'BRL'}.svg`
    );
    const svgFlag = await data.text();
    const imageUrl = await svgToDataUri(svgFlag);

    return imageUrl;
  };

  const getMethodPaymentImageUrl = async (): Promise<string | undefined> => {
    const methodPayment = methodList.find(
      (methodPaymentDetail) =>
        methodPaymentDetail.value.toLowerCase() ===
        paymentDetails.method.toLowerCase()
    )?.iconName;

    console.log(methodPayment);

    const data = await fetch(
      `/payments/${methodPayment ? methodPayment : 'pix'}.svg`
    );
    const svgFlag = await data.text();
    const imageUrl = await svgToDataUri(svgFlag);

    return imageUrl;
  };

  useEffect(() => {
    if (status === 'downloaded') {
      setTimeout(() => {
        setStatus('not-downloaded');
      }, 1000);
    }
  }, [status]);

  return (
    <div className='flex h-[calc(100vh-208px)] justify-center items-center'>
      <div>
        <h1 className='text-5xl font-semibold pb-6'>Your invoice is ready</h1>
        <p className='text-neutral-500 text-xl pb-7'>
          Please review the details carefully before downloading your invoice.
        </p>
        <Button
          disabled={status === 'downloading'}
          onClick={async () => {
            try {
              setStatus('downloading');

              const countryImageUrl = await getCountryImageUrl();
              const methodPaymentImageUrl = await getMethodPaymentImageUrl();

              if (countryImageUrl) {
                const blob = await pdf(
                  <Document>
                    <Page size='A4' style={pdfContainers.page}>
                      <PdfDetails
                        companyDetails={companyDetails}
                        invoiceDetails={invoiceDetails}
                        invoiceTerms={invoiceTerms}
                        paymentDetails={paymentDetails}
                        yourDetails={yourDetails}
                        countryImageUrl={countryImageUrl}
                        methodPaymentImageUrl={methodPaymentImageUrl}
                      />
                    </Page>
                  </Document>
                ).toBlob();
                saveAs(blob, 'invoice.pdf');
                setStatus('downloaded');
              } else {
                setStatus('not-downloaded');
              }
            } catch (e) {
              console.error(e);
              setStatus('not-downloaded');
            }
          }}
          type='button'
          className='w-full h-12 rounded-lg text-lg plausible-event-name=invoice-generated'
        >
          {status === 'not-downloaded' && (
            <>
              <Download className='mr-2 h-6 w-6' /> Download Invoice
            </>
          )}
          {status === 'downloading' && (
            <>
              <LoaderIcon className='mr-2 h-6 w-6 animate-spin' />{' '}
              Downloading...
            </>
          )}
          {status === 'downloaded' && (
            <>
              <CheckCircle2 className='mr-2 h-6 w-6' /> Downloaded
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

Font.register({
  family: 'Geist',
  fonts: [
    {
      src: '/font/Geist-Thin.ttf',
      fontWeight: 'thin',
    },
    {
      src: '/font/Geist-Ultralight.ttf',
      fontWeight: 'ultralight',
    },
    {
      src: '/font/Geist-Light.ttf',
      fontWeight: 'light',
    },
    {
      src: '/font/Geist-Regular.ttf',
      fontWeight: 'normal',
    },
    {
      src: '/font/Geist-Medium.ttf',
      fontWeight: 'medium',
    },
    {
      src: '/font/Geist-SemiBold.ttf',
      fontWeight: 'semibold',
    },
    {
      src: '/font/Geist-Bold.ttf',
      fontWeight: 'bold',
    },
    {
      src: '/font/Geist-UltraBlack.ttf',
      fontWeight: 'ultrabold',
    },
  ],
});
