import { FormRow, FormRowSelect, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {isLoading, showAlert,displayAlert,position,company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, handleChange, clearValues, createJob} = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // if(!position || !company || !jobLocation) {
    //   displayAlert()
    //   return;
    // }
    if (isEditing) {
      // eventually editJob()
      return 
    }
    createJob()
  }

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({name, value})
  }
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow type="text" name="position" value={position} handleChange={handleJobInput} />
          <FormRow type="text" name="company" value={company} handleChange={handleJobInput} />
          <FormRow type="text" name="jobLocation" value={jobLocation} handleChange={handleJobInput} labelText='job location' />
          <FormRowSelect name="status" value={status} handleChange={handleJobInput} list={statusOptions} />
          <FormRowSelect labelText="Job type" name="jobType" value={jobType} handleChange={handleJobInput} list={jobTypeOptions} />
          <div className="btn-container">
            <button disabled={isLoading} type="submit" className="btn btn-block submit-btn" onClick={handleSubmit}>submit</button>
            <button className="btn btn-block clear-btn" onClick={(e) => {
              e.preventDefault();
              clearValues();
            }}>clear</button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}
export default AddJob