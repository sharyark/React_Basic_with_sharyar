// import React from 'react'
// import UserContact from '../UserContact/UserContact'
// import UserProfile from '../UserProfile/UserProfile'
// function User(props) {
// //   return (
// //     <div>User
// //         <div>
           
// {props.user.map(({ address, email, id, name, phone, profile }) => {
//     if (id % 2 === 1) { // Check if id is odd
//         return (
//             <div className="flex justify-center bg-gray-100 p-4" key={id}>
//                 <div className='bg-white shadow-md rounded-lg p-4 mx-2 text-black'>
//                     <UserContact userInfo={{ address, email, id, name, phone }} />
//                 </div>
//                 <div className='bg-white shadow-md rounded-lg p-4 mx-2 text-black'>
//                     <UserProfile userProfil={{ ...profile }} />
//                 </div>
//                 <br />
//             </div>
//         );
//     } else {
//         return null; // Return null for even ids
//     }
// })}
// // {props.user.map(({address,email,id,name,phone,profile}) => {
//             //     if(id % 2 ==1){
//             //     return (<div className="flex justify-center bg-gray-100 p-4">
//             //     <div className='bg-white shadow-md rounded-lg p-4 mx-2 text-black'>
//             //         <UserContact userInfo={{address,email,id,name,phone}} /> </div>
//             //     <div className='bg-white shadow-md rounded-lg p-4 mx-2 text-black'>
//             //         <UserProfile userProfil={{...profile}} /> </div>
//             //         <br />
//             //     </div>
//             //     )}
//             //     else
//             //     {
//             //         return <>empty</>;
//             //     }
//             // })}
            
// //         </div>
// //     </div>
// //   )
// }

// export default User
import React from 'react';
import UserContact from '../UserContact/UserContact';
import UserProfile from '../UserProfile/UserProfile';

function User(props) {
    return (
        <div>
            {props.user.map(({ address, email, id, name, phone, profile }) => {
                if (id % 2 === 1) { // Check if id is odd
                    return (
                        <div className="flex justify-center bg-gray-100 p-4" key={id}>
                            <div className='bg-white shadow-md rounded-lg p-4 mx-2 text-black'>
                                <UserContact userInfo={{ address, email, id, name, phone }} />
                            </div>
                            <div className='bg-white shadow-md rounded-lg p-4 mx-2 text-black'>
                                <UserProfile userProfil={{ ...profile }} />
                            </div>
                            <br />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default User;
