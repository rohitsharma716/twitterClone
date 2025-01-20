const form = document.querySelector(".form");
const usersContainer = document.getElementById("users-container");

// Function to fetch and display users
async function fetchAndDisplayUsers() {
    try {
        const response = await fetch('http://localhost:3000/api/users');
        const users = await response.json();
        
        // Clear the container
        usersContainer.innerHTML = '';
        
        // Sort users by creation date (newest first)
        const sortedUsers = users.sort((a, b) => 
            new Date(b.createdAt) - new Date(a.createdAt)
        );
        
        // Display each user
        sortedUsers.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p class="user-info">Email: ${user.email}</p>
                <p class="user-info">Joined: ${new Date(user.createdAt).toLocaleDateString()}</p>
            `;
            usersContainer.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        usersContainer.innerHTML = '<p style="color: red;">Error loading users</p>';
    }
}

// Fetch users when page loads
fetchAndDisplayUsers();

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {
        // Send data to server
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        

        if (!response.ok) {
            throw new Error(result.error || 'Failed to save data');
        }

        // Create a formatted message for the alert
        const message = `Form Submitted Successfully!\n
Name: ${formData.name}
Email: ${formData.email}`;

        alert(message);
        console.log('Form Data:', result.user);
        
        // Clear the form after submission
        form.reset();
        
        // Refresh the users list
        fetchAndDisplayUsers();
        
    } catch (error) {
        console.error('Error:', error);
        alert(error.message || 'Failed to submit form. Please try again.');
    }
});



