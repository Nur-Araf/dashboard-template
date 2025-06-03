import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Save } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    avatar: "",
  });

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save updated user data (e.g., API call)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.avatar} alt="Profile" />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{user.role}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg">
              Full Name
            </Label>
            {isEditing ? (
              <Input
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full text-lg py-3 px-4" // Increased padding and font size
              />
            ) : (
              <p className="dark:text-gray-200 text-base">{user.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            {isEditing ? (
              <Input
                id="email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                className="w-full text-lg py-3 px-4" // Increased padding and font size
              />
            ) : (
              <p className="dark:text-gray-200 text-base">{user.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-lg">Role</Label>
            <p className="dark:text-gray-200 text-base">{user.role}</p>
          </div>
          <Button
            onClick={isEditing ? handleSave : handleEdit}
            className="w-full mt-4"
            variant={isEditing ? "default" : "outline"}
          >
            {isEditing ? (
              <>
                <Save className="mr-2 h-4 w-4" /> Save
              </>
            ) : (
              <>
                <Pencil className="mr-2 h-4 w-4" /> Edit Profile
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
