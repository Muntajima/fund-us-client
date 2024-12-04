import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2'

const AddNewCampaign = () => {

    const handleAddCampaign = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const type = form.type.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const image = form.image.value;
        const name = form.name.value;
        const email = form.email.value;

        const newCampaign = { title, type, amount, deadline, description, image, name, email };
        console.log(newCampaign);

        //send data to the server
        fetch('http://localhost:5000/campaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })      
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your campaign added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className='w-4/5 mx-auto'>
            <div><Navbar /></div>
            <h2 className='font-bold text-2xl text-center'>Add new campaign for your project</h2>
            <p className='text-center mt-4 mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptas aut ex eaque dolor delectus eveniet sit, magnam accusamus est.</p>

            <form onSubmit={handleAddCampaign}>
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Campaign Title</span>
                        </label>
                        <label className='input-group'>
                            <input type="text"
                                name="title" placeholder='campaign title' className='input input-bordered w-full' />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-8">
                        <label className="label">
                            <span className="label-text">Campaign Type</span>
                        </label>
                        <select
                            name="type"
                            className="select select-bordered w-full"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Choose type
                            </option>
                            <option value="Medical">Medical</option>
                            <option value="Business">Business</option>
                            <option value="Environment">Environment</option>
                            <option value="Animal">Animal</option>
                        </select>
                    </div>

                </div>

                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Donation Amount</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="amount" placeholder='minimum amount' className='input input-bordered w-full' />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text'>Deadline</span>
                        </label>
                        <label className='input-group'>
                            <input type="datetime-local" name="deadline" placeholder='name' className='input input-bordered w-full' id="" />
                        </label>

                    </div>

                </div>

                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Image</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="image" placeholder='photo url' className='input input-bordered w-full' />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text'>Description</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="description" placeholder='description' className='input input-bordered w-full' />
                        </label>

                    </div>

                </div>

                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Nama</span>
                        </label>
                        <label className='input-group'>
                            <input type="text"
                                name="name" placeholder='your name' className='input input-bordered w-full' id="" />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <label className='input-group'>
                            <input type="text"
                                name="email" placeholder='email' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Add Campaign" className='btn btn-block bg-gray-700 text-white' />
                </div>
            </form>

            <div className='mt-12'><Footer /></div>
        </div>
    );
};

export default AddNewCampaign;