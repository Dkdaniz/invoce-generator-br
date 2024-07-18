/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Image, Text, View } from '@react-pdf/renderer';
import { currencyList } from '@/lib/currency';
import { methodList } from '@/lib/methodsPayment';

import { pdfTypography, pdfUtils } from '@/lib/pdfStyles';

interface PaymentDetailsPdfProps extends PaymentDetails {
  countryImageUrl: string;
  methodPaymentImageUrl: string;
}

export const PaymentDetailsPdf: React.FC<PaymentDetailsPdfProps> = ({
  currency = 'BRL',
  countryImageUrl,
  methodPaymentImageUrl,
  method = 'PIX',
}) => {
  const currencyDetails = currencyList.find(
    (currencyDetail) =>
      currencyDetail.value.toLowerCase() === currency.toLowerCase()
  )?.details;

  const methodListDetails = methodList.find(
    (methodListDetails) =>
      methodListDetails.value.toLowerCase() === method.toLowerCase()
  );

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 1,
          paddingLeft: 40,
          paddingRight: 12,
          paddingVertical: 16,
          flexDirection: 'column',
        }}
      >
        <Text style={{ ...pdfTypography.title, paddingBottom: 12 }}>
          MÉTODO DE PAGAMENTO
        </Text>
        {methodListDetails && (
          <View style={{ ...pdfUtils.flexRowItemCenter, gap: 8 }}>
            <Image
              src={methodPaymentImageUrl}
              style={{
                width: 20,
                height: 20,
                flexShrink: 0,

                objectFit: 'cover',
              }}
            />
            <View>
              <Text style={{ fontSize: 14, fontWeight: 'medium' }}>
                {methodListDetails.label}
              </Text>
            </View>
          </View>
        )}
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 40,
          paddingRight: 12,
          paddingVertical: 16,
          flexDirection: 'column',
        }}
      >
        <Text style={{ ...pdfTypography.title, paddingBottom: 12 }}>
          MOEDA DE PAGAMENTO
        </Text>
        {currencyDetails && (
          <View style={{ ...pdfUtils.flexRowItemCenter, gap: 8 }}>
            <Image
              src={countryImageUrl}
              style={{
                width: 30,
                height: 30,
                flexShrink: 0,
                borderRadius: '100%',
                objectFit: 'cover',
              }}
            />
            <View>
              <Text style={{ fontSize: 14, fontWeight: 'medium' }}>
                {currencyDetails.currencyName}
              </Text>
              <Text style={pdfTypography.title}>
                {currencyDetails.currencySymbol}{' '}
                {currencyDetails.currencyShortForm}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
