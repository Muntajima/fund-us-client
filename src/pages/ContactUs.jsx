import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const form = useRef();
    const navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ryizezb', 'template_g2okr7h', form.current, {
                publicKey: 'gj81_Dvnddqffz55Z',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        title: "Good job!",
                        text: "You hit the post!",
                        icon: "success"
                      });
                      navigate('/')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <Navbar />
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" /> <br />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
            <form ref={form} onSubmit={sendEmail} className="card-body mx-44">
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" name="from_name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="from_email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Amount</span>
                    </label>
                    <textarea type="text" name="message" placeholder="message" className="input input-bordered" required />
                    
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Send" className="btn btn-primary"/>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default ContactUs;