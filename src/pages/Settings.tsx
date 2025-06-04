import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Camera, Pencil, Save } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  bio: string;
}

const Settings: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "John Doe",
    phone: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Perform save operation (e.g., API call)
    console.log("Saving data:", formData, image);
    // Example: await saveUserData(formData, image);
    setIsEditing(false); // Exit edit mode after saving
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    if (isEditing) {
      handleSave(); // Call save logic on form submission
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image Section */}
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={preview || "https://via.placeholder.com/150"}
                  alt="Profile"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <Label
                  htmlFor="image"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Camera className="w-5 h-5" />
                  <span>Change Profile Picture</span>
                </Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-base">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="mt-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-base">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="mt-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-base">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="mt-2"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="bio" className="text-base">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself"
                  className="mt-2"
                  rows={4}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {isEditing && (
              <Button type="submit" className="w-full mt-4" variant={"default"}>
                <Save className="mr-2 h-4 w-4" /> Save
              </Button>
            )}
            {!isEditing && (
              <Button
                className="w-full mt-4"
                onClick={() => setIsEditing(true)}
                variant={"outline"}
              >
                <Pencil className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
