import React from 'react'

function 
Pay() {
  return (
    <>
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value="YOUR_PUBLIC_API_KEY" />
    <input type="hidden" name="tx_ref" value="negade-tx-12345678sss9" />
    <input type="hidden" name="amount" value="10" />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value="israel@negade.et" />
    <input type="hidden" name="first_name" value="Israel" />
    <input type="hidden" name="last_name" value="Goytom" />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
    <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
    <input type="hidden" name="return_url" value="http://localhost:5174/donate#contact" />
    <input type="hidden" name="meta[title]" value="test" />
    <button type="submit" className='bg-purple-200 px-4 py-2 rounded'>Pay Now</button>
</form> 
    </>
  )
}

export default Pay;
