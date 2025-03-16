import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv('/content/sport_health_dataset.csv')

print(df.head())

label_encoder = LabelEncoder()

df['Gender'] = label_encoder.fit_transform(df['Gender'])
df['Health Condition'] = label_encoder.fit_transform(df['Health Condition'])
df['Fitness Level'] = label_encoder.fit_transform(df['Fitness Level'])
df['Intensity'] = label_encoder.fit_transform(df['Intensity'])
df['Recommended Sport/Activity'] = label_encoder.fit_transform(df['Recommended Sport/Activity'])

df['Duration'] = df['Duration'].str.replace(' min', '').astype(int)

X = df[['Age', 'Gender', 'Health Condition', 'Fitness Level', 'Duration', 'Intensity']]
y = df['Recommended Sport/Activity']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

knn = KNeighborsClassifier(n_neighbors=3) 
knn.fit(X_train, y_train)

new_data = [[40, 0, 1, 0, 45, 2]]  
new_data_scaled = scaler.transform(new_data)  
prediction = knn.predict(new_data_scaled)
recommended_sport = label_encoder.inverse_transform(prediction)


print(f"Recommended Sport/Activity: {recommended_sport[0]}")
