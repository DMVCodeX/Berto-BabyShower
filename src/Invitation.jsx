export function Invitation() {
  return (
    <div className="container">
      <h1 id="orange" className="m-3 ">
        You are Invited to Anggie & Alberto&apos;s Baby Shower
      </h1>
      <img
        id="invite-img"
        className=""
        src="https://t3.ftcdn.net/jpg/05/27/83/70/360_F_527837080_j1jPNhyFFzNnElky9gtAfyPJI8Cu23m2.jpg"
        alt=""
      />
      <br />

      <h1 id="orange">Save the Date:</h1>
      <h5>July 29th, 2023</h5>
      <br />
      <h2 id="orange">Location:</h2>
      <h5>Thomas Bull Memorial Park</h5>
      <br />
      <h2 id="orange">Address:</h2>
      <h5>211 State Route 416</h5>
      <h5>Montgomery, NY 12549</h5>
      <br />
      <h2 id="orange">Time:</h2>
      <h5>2pm - 6pm</h5>
      <br />
      <h3 id="orange">Memo:</h3>
      <h5>RSVP to Tania at 347-337-1204</h5>

      <br />
      <h3 id="orange">Accommodations:</h3>

      <h5>Near by Accommodations</h5>
      <a href="/accommodations">
        {" "}
        <img className="m-3" src="https://img.icons8.com/?size=512&id=10666&format=png" alt="" height="50" width="50" />
      </a>
      <p>Click the icon to view near by options.</p>
    </div>
  );
}
