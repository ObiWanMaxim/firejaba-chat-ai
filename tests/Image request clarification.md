# Image request clarification


##### User:


image



##### Assistant:


It seems you are requesting an image, but I can't generate or display images directly. However, if you have any specific questions about LobeChat or if you need information about certain aspects, feel free to ask, and I can assist you with detailed text-based information!



##### User:


Hi, can you explain me in details what i need to do for deploy LobeChat with Server-Side Database on Microsoft Azure Cloud?



##### Assistant:


Deploying LobeChat with a server-side database on Microsoft Azure involves several steps. Here’s a detailed guide to help you through the process:

### Step 1: Prepare Your Local Environment

1. **Prerequisites:**
   - You should have Node.js installed. You can download it from [Node.js](https://nodejs.org/).
   - Install [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) if you don't have it already.
   - Ensure you have a code editor (e.g., Visual Studio Code) for modifying your application code.

2. **Clone the LobeChat Repository:**
   ```bash
   git clone https://github.com/lobehub/lobe-chat.git
   cd lobe-chat
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

### Step 2: Set Up Your Server-Side Database in Azure

1. **Create an Azure SQL Database:**
   - Log in to your Azure Portal.
   - Go to "Create a resource" > "Databases" > "SQL Database."
   - Fill in the necessary details including subscription, resource group, database name, and server.
   - Create a new SQL server if you don’t have one, by specifying the server name, admin login, password, and location.

2. **Configure Firewall Rules:**
   - In your SQL Database server, go to "Firewalls and virtual networks."
   - Add your IP address to the allowed IP addresses so that your local machine can connect to the Azure SQL Database.

### Step 3: Configure Your Application

1. **Set Up Connection Strings:**
   - In the Azure Portal, find your SQL database connection string under the "Connection strings" section.
   - In your `.env.local` or relevant configuration file in the LobeChat application, add the connection string:
     ```
     DATABASE_URL=<your_connection_string>
     ```

2. **Modify Code for Database Integration:**
   - Ensure your application has the necessary logic for connecting to the database and handling data. You might need a library like `sequelize`, `typeorm`, or any ORM/tool you prefer for interacting with your database.

### Step 4: Prepare for Deployment

1. **In the root of your project, build the application:**
   ```bash
   npm run build
   ```

2. **Create a production environment configuration:**
   - Make sure to create a production environment file (e.g., `.env.production`) containing all necessary environment variables such as your database connection string and other sensitive data.

### Step 5: Deploy to Azure

1. **Create an App Service:**
   - In the Azure Portal, navigate to "Create a resource" > "Web" > "App Service."
   - Fill in the required details: App name, subscription, resource group, publish type (Code), runtime stack (Node.js), region, etc.

2. **Deploy Your Code:**
   - You can deploy your code directly from your local machine using the Azure CLI:
     ```bash
     az webapp up --name <your_app_name> --resource-group <your_resource_group>
     ```
   - Alternatively, you can use Git for deployment by following the Azure documentation on [Continuous Deployment](https://docs.microsoft.com/en-us/azure/app-service/deploy-zip).

3. **Configure Azure App Settings:**
   - In the Azure Portal, navigate to your App Service and go to "Configuration."
   - Add the necessary application settings that mirror your environment variables (like database connection strings).

### Step 6: Test and Monitor

1. **Access Your Application:**
   - Once deployed, you can access your LobeChat application via the Azure App URL.
   - Ensure that all functionalities work correctly, especially those that communicate with your database.

2. **Monitor:**
   - Use Azure Portal's monitoring tools to check for any errors, application insights, or logging to troubleshoot if needed.

### Conclusion

This guide provides a comprehensive overview of deploying LobeChat with a server-side database on Microsoft Azure. Be sure to refer to Azure’s official documentation for any specific commands or features according to your implementation needs. If you encounter any issues, feel free to ask for help!

