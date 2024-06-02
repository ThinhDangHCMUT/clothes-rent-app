export const Method = () => {
  return (
    <div className="checkout__col-4">
      <div className="block">
        <h3 className="block__title">Payment method</h3>
        <ul className="round-options round-options--three">
          <li className="round-item">
            <img src="/images/logos/paypal.png" alt="Paypal" />
          </li>
          <li className="round-item">
            <img src="/images/logos/visa.png" alt="Paypal" />
          </li>
          <li className="round-item">
            <img src="/images/logos/mastercard.png" alt="Paypal" />
          </li>
          <li className="round-item">
            <img src="/images/logos/maestro.png" alt="Paypal" />
          </li>
          <li className="round-item">
            <img src="/images/logos/discover.png" alt="Paypal" />
          </li>
          <li className="round-item">
            <img src="/images/logos/ideal-logo.svg" alt="Paypal" />
          </li>
        </ul>
      </div>

      <div className="block">
        <h3 className="block__title">Delivery method</h3>
        <ul className="round-options round-options--two">
          <li className="round-item round-item--bg">
            <img src="/images/logos/inpost.svg" alt="Paypal" />
            <p>$20.00</p>
          </li>
          <li className="round-item round-item--bg">
            <img src="/images/logos/dpd.svg" alt="Paypal" />
            <p>$12.00</p>
          </li>
          <li className="round-item round-item--bg">
            <img src="/images/logos/dhl.svg" alt="Paypal" />
            <p>$15.00</p>
          </li>
          <li className="round-item round-item--bg">
            <img src="/images/logos/maestro.png" alt="Paypal" />
            <p>$10.00</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
