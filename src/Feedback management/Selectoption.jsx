const Selectoption = () => {

    return (  
        <body>
        
            <section class="optionssec">
            <h1 class="title">Select the option you wish to proceed</h1>
            <div class="Optionscontainer">
                
                <button class="primary__btn" onClick={handleInstructorFeedbackClick}>Fitness Instructor Feedback</button>
                <button class="primary__btn" id="servicebutton" onClick={handleServiceFeedbackClick}>Service Feedback</button>
                
            </div>
            </section>
            </body>
    );
}
 
export default Selectoption;