import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Inbox = () => {

    const urea = '54e11197789ad63457999019e'
    const ideal = '0fdb8a7f29'
    const postUrl = `https://genhybridsystems.us11.list-manage.com/subscribe/post?u=${urea}&id=${ideal}`;

    const Form = ({ status, message, onValidated }) => {

        const [email, setEmail] = useState('');

        const submitForm = async (e) => {
            e.preventDefault();
            onValidated({
                EMAIL: email,
            });
        }

        useEffect(() => {
            status === "success" && setEmail('');
        }, [status]);

        return (
            <div className=' w-full px-1 mb-[6rem]'>
                <form onSubmit={submitForm} className=" rounded-3xl px-2 w-11/12 md:w-[25rem] mx-auto h-[3.3rem] bg-white flex justify-between items-center">
                    <input required onChange={(e) => setEmail(e.target.value)} value={email} className=" text-black border-none focus:outline-none pl-5 focus:border-none" type='email' placeholder='Your email address' />
                    <button type='submit' className="bg-[#3a1884] h-[2.6rem] rounded-full  w-[2.6rem]">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </form>
                {status === "sending" && (
                    <div className="text-white text-center">
                        sending...
                    </div>
                )}
                {status === "error" && (
                    <div
                        className="text-white text-center"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === "success" && (
                    <div
                        className="text-white text-center "
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
            </div>
        )
    }

    return (
        <section className="bg-black w-full py-1">
            <div className="bg-motive rounded-3xl bg-cover bg-center  flex justify-center items-center text-white my-[5rem]">
                <div>
                    <p className="text-[1.8rem] md:text-[2.5rem] lg:text-[4rem] lg:w-3/4 mx-auto leading-none mb-[3rem] mt-[6rem] landing text-center">Get notified about Cloudax Launch</p>
                    <MailchimpSubscribe
                        url={postUrl}
                        render={({ subscribe, status, message }) => (
                            <Form
                                status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                            />
                        )}
                    />
                </div>
            </div>
        </section>
    )
}

export default Inbox