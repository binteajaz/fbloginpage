export default function Form(){
    return (
        <div className="form-container">
            <form action="">
             <input type="email" placeholder="Email address or phone number" />
             <br />
             <input type="password" placeholder="Password" />
             <button type="submit">Log In</button>
             <a href="">Forgotten Password</a>
            </form>
            <hr />
            <div class="create-btn">
                <a href="">Create Your Account</a>
            </div>
        </div>
    )
}