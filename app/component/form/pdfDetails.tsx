import { View } from '@react-pdf/renderer';
import { YourDetailsPDF } from './yourDetails/yourDetailsPdf';
import { InvoiceTermsPdf } from './invoiceTerms/InvoiceTermsPdf';
import { CompanyDetailsPdf } from './companyDetails/companyDetailsPdf';
import { InvoiceDetailsPdf } from './invoiceDetails/invoiceDetailsPdf';
import { PaymentDetailsPdf } from './paymentDetails/paymentDetailsPdf';
import { pdfUtils } from '@/lib/pdfStyles';

export const PdfDetails = ({
  yourDetails,
  companyDetails,
  invoiceDetails,
  paymentDetails,
  invoiceTerms,
  countryImageUrl,
  methodPaymentImageUrl,
}: {
  yourDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceItemDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
  countryImageUrl: string;
  methodPaymentImageUrl: string;
}) => (
  <View>
    <InvoiceTermsPdf {...invoiceTerms} />
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        ...pdfUtils.borderTop,
        ...pdfUtils.borderBottom,
      }}
    >
      <YourDetailsPDF {...yourDetails} />
      <CompanyDetailsPdf {...companyDetails} />
    </View>
    <View>
      <View style={pdfUtils.borderBottom}>
        <InvoiceDetailsPdf {...invoiceDetails} />
      </View>
      <View>
        <PaymentDetailsPdf
          {...paymentDetails}
          countryImageUrl={countryImageUrl}
          methodPaymentImageUrl={methodPaymentImageUrl}
        />
      </View>
    </View>
  </View>
);
