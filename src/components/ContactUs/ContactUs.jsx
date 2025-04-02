import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-separator";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function ContactUs() {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    // Backend pending...!
    setLoading(true);
    toast("Form Submitted.");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <section>
      <header className="h-96 bg-blue-400 flex justify-center items-center">
        <h2 className="text-5xl text-white font-bold">Contact Us</h2>
      </header>

      <div className="mt-24">
        <div className="flex justify-center mb-3 space-x-2">
          <Separator className="w-8 md:w-14 h-[1px] md:h-[2px] mt-[16px] bg-blue-500" />
          <p className="text-base md:text-xl font-semibold md:font-bold text-blue-500">
            Get in Touch
          </p>
          <Separator className="w-8 md:w-14 h-[1px] md:h-[2px] mt-[16px] bg-blue-500" />
        </div>
        <p className="text-xl md:text-4xl font-semibold text-black text-center">
          Contact Us For Any Query
        </p>
      </div>

      <div className="px-7 md:px-24 lg:px-40 my-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="cols-span-1">
            <form onSubmit={handleSave} className="space-y-5 grid">
              <div className="cols-span-1">
                <label>Your Name</label>
                <Input type="text" required={true} className="" />
              </div>
              <div className="cols-span-1">
                <label>Email</label>
                <Input type="text" required={true} className=" " />
              </div>
              <div className="cols-span-1">
                <label>Subject</label>
                <Input type="text" required={true} className=" w-full" />
              </div>
              <textarea
                className="border-[1px] border-grey-200 rounded-md shadow-sm"
                placeholder="Type your message..."
                rows="6"
              ></textarea>
              <Button
                variant="outline"
                disabled={loading}
                className="bg-blue-400 font-semibold text-lg text-white rounded-3xl my-3"
                aria-label="Submit Form"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Submit"}
              </Button>
            </form>
          </div>

          <div className="cols-span-1">
            <div>
              <p>
                Labore sea amet kasd diam justo amet ut vero justo. Ipsum ut et
                kasd duo sit, ipsum sea et erat est dolore, magna ipsum et magna
                elitr. Accusam accusam lorem magna, eos et sed eirmod dolor est
                eirmod eirmod amet.
              </p>

              <div className="space-y-5 mt-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex justify-center items-center bg-blue-300 rounded-full">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <span>123 Street, New York, USA</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex justify-center items-center bg-blue-300 rounded-full">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <span>mail@domain.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex justify-center items-center bg-blue-300 rounded-full">
                    <Phone className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <span>+012 345 67890</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex justify-center items-center bg-blue-300 rounded-full">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Timming</h3>
                    <p className="font-semibold">Monday - Friday:</p>
                    <p>08:00 AM - 05:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
