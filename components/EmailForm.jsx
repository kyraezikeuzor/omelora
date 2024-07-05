'use client'
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import Button  from './ui/Button';
import Icon from './Icon'

function EmailForm() {
    const url = "https://computefutures.us8.list-manage.com/subscribe/post?u=65c2aba71bc6d41953c14cc83&amp;id=5a1e70d2cb&amp;f_id=007105e0f0";
  // The url looks like the url below:
  // https://aaaaaaaaa.us20.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxx&amp;id=yyyyyyyyyy
  const {
      loading,
      error,
      success,
      message,
      handleSubmit
    } = useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
  });

  return (
    <div className='w-full'>
      <form className="w-full flex flex-col gap-5"
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <div className='hidden flex flex-col gap-1'>
            <span className="font-bold text-2xl">Subscribe to our email list</span>
            <p>Learn about our latest events, resources, programs, and more!</p>
        </div>

        <fieldset className='w-full flex flex-col md:flex-row gap-5'>
            <input
                id="FNAME"
                type="text"
                placeholder="First name"
                value={fields.FNAME}
                onChange={handleFieldChange}
            />
            <input
                id="LNAME"
                type="text"
                placeholder="Last name"
                value={fields.LNAME}
                onChange={handleFieldChange}
            />
        </fieldset>

        <input
          id="EMAIL"
          type="email"
          placeholder="Email"
          value={fields.EMAIL}
          onChange={handleFieldChange}
        />

        <Button >
          Subscribe <Icon inline fillColor='white' icon="Mail" size='sm'/>
        </Button>
      </form>
      
      {loading && "Submitting..."}
      {error && message}
      {success && message}
    </div>
  );
}

export default EmailForm;