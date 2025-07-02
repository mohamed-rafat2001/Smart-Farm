import PricingCard from './PricingCard.jsx';
function PricingMonthly() {
  return (
    <>
      <PricingCard
        title="Starter"
        description="For startups with small teams that need to multitask"
        price="Free"
        includes={[
          'Basic CRM integrations',
          'Basic reporting',
          'Basic CRM integrations',
          'Basic reporting',
        ]}
      />

      <PricingCard
        title="Business"
        description="For SMBs with mid-sized teams that are growing"
        price="$199"
        includes={[
          'Basic CRM integrations',
          'Basic reporting',
          'Basic CRM integrations',
          'Basic reporting',
          'Basic reporting',
        ]}
      />

      <PricingCard
        title="Enterprise"
        description="For SMBs with mid-sized teams that are growing"
        price="$199"
        includes={[
          'Basic CRM integrations',
          'Basic reporting',
          'Basic CRM integrations',
          'Basic reporting',
          'Basic reporting',
          'Basic CRM integrations',
        ]}
      />
    </>
  );
}
export default PricingMonthly;
