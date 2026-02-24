body {
    background-color: #f0f4f8;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding-top: 50px;
}

h1 { color: #1a3a5f; margin-bottom: 40px; }

.main-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.brain-wrapper {
    position: relative;
    margin-bottom: 60px; /* مسافة للخط */
}

.realistic-brain {
    width: 200px;
    height: auto;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
    animation: pulse 3s infinite ease-in-out;
}

/* رسم الخط الواصل */
.connecting-line {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 2px;
    height: 60px;
    background: linear-gradient(to bottom, #2c7be5, transparent);
    transform: translateX(-50%);
}

.brain-node {
    background: #2c7be5;
    color: white;
    padding: 12px 30px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    z-index: 10;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(44, 123, 229, 0.4);
}

.brain-node:hover {
    transform: scale(1.1);
    background: #1a5bb8;
}

.menu {
    display: none;
    background: white;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    width: 250px;
    overflow: hidden;
}

.menu ul { list-style: none; padding: 0; margin: 0; }
.menu li {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: 0.2s;
}
.menu li:hover { background: #f8fbff; color: #2c7be5; }

/* حركة نبض خفيفة للدماغ */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
