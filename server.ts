import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock Database Path
  const DB_PATH = path.join(process.cwd(), "db.json");
  
  // Initialize DB if not exists
  if (!fs.existsSync(DB_PATH)) {
    const initialData = {
      portfolio: [
        {
          id: 1,
          title: "Gangnam HQ Tower",
          location: "Seoul, Korea",
          description: "Premium office space in the heart of Gangnam.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
          category: "사옥"
        },
        {
          id: 2,
          title: "Pangyo Tech Center",
          location: "Seongnam, Korea",
          description: "Modern corporate headquarters in Korea's Silicon Valley.",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
          category: "사옥"
        },
        {
          id: 3,
          title: "Yeouido Financial Hub",
          location: "Seoul, Korea",
          description: "Strategic office location for global financial firms.",
          image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1000",
          category: "사옥"
        },
        {
          id: 4,
          title: "Magok Innovation Park",
          location: "Seoul, Korea",
          description: "Cutting-edge R&D center for technology leaders.",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
          category: "사옥"
        },
        {
          id: 5,
          title: "Hannam Luxury Villa",
          location: "Seoul, Korea",
          description: "Exclusive residential property in the most prestigious neighborhood.",
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
          category: "주택"
        },
        {
          id: 6,
          title: "Seongbuk-dong Estate",
          location: "Seoul, Korea",
          description: "Traditional elegance meets modern luxury in this private estate.",
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
          category: "주택"
        },
        {
          id: 7,
          title: "Jeju Ocean Retreat",
          location: "Jeju Island, Korea",
          description: "Serene coastal living with breathtaking volcanic landscapes.",
          image: "https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=1000",
          category: "주택"
        },
        {
          id: 8,
          title: "Busan Cliffside Manor",
          location: "Busan, Korea",
          description: "Architectural masterpiece overlooking the East Sea.",
          image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000",
          category: "주택"
        },
        {
          id: 9,
          title: "The Penthouse Hannam",
          location: "Seoul, Korea",
          description: "Ultra-luxury apartment with panoramic Han River views.",
          image: "https://images.unsplash.com/photo-1536376074432-cd4258ae71dd?auto=format&fit=crop&q=80&w=1000",
          category: "아파트"
        },
        {
          id: 10,
          title: "Lotte World Tower Res.",
          location: "Seoul, Korea",
          description: "Living at the highest point in Korea with world-class amenities.",
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
          category: "아파트"
        },
        {
          id: 11,
          title: "Banpo River Park",
          location: "Seoul, Korea",
          description: "Modern high-rise living in the heart of the city's green belt.",
          image: "https://images.unsplash.com/photo-1567684014761-b618baf58b83?auto=format&fit=crop&q=80&w=1000",
          category: "아파트"
        },
        {
          id: 12,
          title: "Songdo Central Park",
          location: "Incheon, Korea",
          description: "Sustainable urban living in the world's smartest city.",
          image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1000",
          category: "아파트"
        },
        {
          id: 13,
          title: "Itaewon Expat Loft",
          location: "Seoul, Korea",
          description: "Stylish rental unit in the city's most international district.",
          image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
          category: "렌트"
        },
        {
          id: 14,
          title: "Yeonnam Artist Studio",
          location: "Seoul, Korea",
          description: "Creative rental space in the trendy Yeonnam-dong area.",
          image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000",
          category: "렌트"
        },
        {
          id: 15,
          title: "Haeundae Beach Suite",
          location: "Busan, Korea",
          description: "Premium vacation rental steps away from the beach.",
          image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000",
          category: "렌트"
        },
        {
          id: 16,
          title: "Gyeongju Heritage Stay",
          location: "Gyeongju, Korea",
          description: "Unique rental experience in a modernized traditional Hanok.",
          image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000",
          category: "렌트"
        }
      ],
      contacts: [],
      siteConfig: {
        heroTitle: "HOMEGROUND",
        heroSubtitle: "Your Secure Gateway to Premium Korean Real Estate",
        whyKoreaText: "Korea is the world's safest investment destination. With top-tier security and a culture of respect, your assets are protected in the most stable environment."
      }
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
  }

  const getDb = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  const saveDb = (data: any) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  // API Routes
  app.get("/api/portfolio", (req, res) => {
    res.json(getDb().portfolio);
  });

  app.post("/api/portfolio", (req, res) => {
    const db = getDb();
    const item = req.body;
    if (item.id) {
      const index = db.portfolio.findIndex((p: any) => p.id === item.id);
      if (index !== -1) {
        db.portfolio[index] = item;
        saveDb(db);
        return res.json(item);
      }
    }
    const newItem = { ...item, id: Date.now() };
    db.portfolio.push(newItem);
    saveDb(db);
    res.json(newItem);
  });

  app.delete("/api/portfolio/:id", (req, res) => {
    const db = getDb();
    db.portfolio = db.portfolio.filter((p: any) => p.id !== parseInt(req.params.id));
    saveDb(db);
    res.json({ success: true });
  });

  app.get("/api/contacts", (req, res) => {
    res.json(getDb().contacts);
  });

  app.post("/api/contacts", (req, res) => {
    const db = getDb();
    const newContact = { ...req.body, id: Date.now(), date: new Date().toISOString() };
    db.contacts.push(newContact);
    saveDb(db);
    res.json({ success: true });
  });

  app.get("/api/config", (req, res) => {
    res.json(getDb().siteConfig);
  });

  app.post("/api/config", (req, res) => {
    const db = getDb();
    db.siteConfig = req.body;
    saveDb(db);
    res.json({ success: true });
  });

  app.get("/api/admin-config", (req, res) => {
    const db = getDb();
    res.json(db.adminConfig || { username: "admin", password: "5252" });
  });

  app.post("/api/admin-config", (req, res) => {
    const db = getDb();
    db.adminConfig = req.body;
    saveDb(db);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
