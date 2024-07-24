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
      <form className="w-full flex flex-col gap-3"
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >

        <div className='w-full flex flex-col md:flex-row justify-between gap-3'>
            <input
                id="FNAME"
                type="text"
                placeholder="First name"
                value={fields.FNAME}
                onChange={handleFieldChange}
                className='w-full'
            />
            <input
                id="LNAME"
                type="text"
                placeholder="Last name"
                value={fields.LNAME}
                onChange={handleFieldChange}
                className='w-full'
            />
        </div>

        <div className='w-full flex flex-col gap-1'>
          <input
            id="EMAIL"
            type="email"
            placeholder="Email"
            value={fields.EMAIL}
            onChange={handleFieldChange}
          />
          <span className='text-sm opacity-45'>No spam emails. You can unsubscribe at any time!</span>
        </div>
        
        <div className='w-full flex flex-row'>
          <div className='w-full'>
            <Button >
              Subscribe <Icon inline fillColor='white' icon="Mail" size='sm'/>
            </Button>
          </div>
        </div>
      </form>
      
      {loading && "Submitting..."}
      {error && message}
      {success && message}
    </div>
  );
}

export default EmailForm;